var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
var User = require('../models/user');

passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: process.env.GOOGLE_CALLBACK
},function(accessToken, refreshToken, profile, cb){
    User.findOne({googleId: profile.id}, function(err, user) {
        if (err) return cb(err);
        if (user) {
          // returning user
          return cb(null, user);
        } else {
          // we have a new user via OAuth!
          var newUser = new User({
            name: profile.displayName,
            email: profile.emails[0].value,
            avatar: profile.photos[0].value,
            googleId: profile.id
          });
          newUser.save(function(err) {
            if (err) return cb(err);
            return cb(null, newUser);
          });
        };
      });
    }));
    // ////////  NOT SURE WHAT IT DOES BUT I THINK THEY SET THE USER KEY IN REQ OBJECT ////////////// 
    passport.serializeUser(function(user, done) {
      done(null, user.id);
    });
    passport.deserializeUser(function(id, done) {
      User.findById(id, function(err, user) {
        done(err, user);
      });
    });
var express = require('express');
var router = express.Router();
var passport = require('passport');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'CarsJr' });
});

router.get('/auth/google',passport.authenticate(
  'google',
  {
    scope: ['profile','email']
  }
  ));
  router.get('/oauth2callback', passport.authenticate(
    'google',
    {
      successRedirect: '/home',
      failureRedirect: '/home'
    }
    ));
    router.get('/logout', function(req, res , next) {
      // req.logout();
      // res.redirect('/');
      req.logout(function(err) {
        if (err) { return next(err); }
        res.redirect('/');
      });
    });

module.exports = router;

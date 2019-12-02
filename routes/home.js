var express = require('express');
var router = express.Router();
var User = require('../models/user');

router.get('/home',isLoggedIn,function(req,res){
    User.find({},function(err, users){
        res.render('home',{
            users,
            loggedInUser: req.user,
        })
    })
  });
  
  function isLoggedIn(req, res,next){
    if(req.isAuthenticated) {
      console.log(req.isAuthenticated);
      return next();}
    console.log("kose babr afrighayi")
    res.redirect('/auth/google')
}

  module.exports = router;
  
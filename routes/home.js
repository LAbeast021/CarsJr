var express = require('express');
var router = express.Router();
var User = require('../models/user');
var Post = require('../models/post');

router.get('/home',isLoggedIn,function(req,res){
    Post.find({},function(err, posts){
        res.render('home',{
            posts,
            loggedInUser: req.user,
            title: 'Home'
        })
    })
  });
  
  function isLoggedIn(req, res,next){
    if(req.isAuthenticated()){
      return next();}
    res.redirect('/auth/google')
}

  module.exports = router;
  
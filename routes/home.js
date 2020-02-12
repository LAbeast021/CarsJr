var express = require('express');
var mongoose = require('mongoose')
var router = express.Router();
var User = require('../models/user');
var Post = require('../models/post');




////////////////////// LIKES ////////////////////////////////////////////////
router.get('/likes/:uId/:pId',function(req,res){
  Post.findById(req.params.pId,function(err,post){
    if(post.likes.includes(req.params.uId)){
      post.likes.remove(req.params.uId)
    }
    else{
      post.likes.push(req.params.uId)
    }
    post.save(function(err){
      res.status(200).json(post.likes);
    })
  })
  
})
// ///////////////////////////////////////////////////////////////////////////

router.get('/home',isLoggedIn,async function(req,res){
  let posts = await Post.find({ $query: {}, $orderby: { createdAt : -1 } })
  // Post.find({}).sort({'created_at': -1})(function(err,posts){
    res.render('home',{
      posts:posts.reverse(),
      loggedInUser: req.user,
      title: 'Home'
  })
  // })
  });
  
  function isLoggedIn(req, res,next){
    if(req.isAuthenticated()){
      return next();}
    res.redirect('/auth/google')
}

  module.exports = router;
  
  
var express = require('express');
var router = express.Router();
var User = require('../models/user');

router.get('/:id', function(req,res){
    res.render('profile',{
      user:req.user
    })
  })
  
  module.exports = router;
  
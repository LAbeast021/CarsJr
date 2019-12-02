var express = require('express');
var router = express.Router();
var User = require('../models/user');

router.get('/home',function(req,res){
    User.find({},function(err, users){
        console.log(users);
        res.render('global',{
            users
        })
    })
  });

  module.exports = router;
  
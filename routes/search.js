var express = require('express');
var router = express.Router();
var User = require('../models/user');
var Post = require('../models/post');

router.get('/', function ( req, res ){
    var modelQuery = req.query.userName ? {name: new RegExp(req.query.userName, 'i')} : {};
    let sortKey = req.query.sort || 'name';
    User.find(modelQuery, function(err, users){
            users.forEach( user => {
                Post.find({userId : user._id},function(err,posts){
                    user.posts = posts.length
                    if(err) return next(err);
                    res.render('users/search',{
                        users,
                        name: req.query.userName,
                        sortKey,
                        loggedInUser: req.user,
                        title: "Search"
            })
                })
            })
        })
});


module.exports = router
var express = require('express');
var router = express.Router();
var User = require('../models/user');

router.get('/', function ( req, res ){
    var modelQuery = req.query.userName ? {name: new RegExp(req.query.userName, 'i')} : {};
    let sortKey = req.query.sort || 'name';
    User.find(modelQuery, function(err, users){
            console.log('req.quer: ', users)
            if(err) return next(err);
            res.render('users/search',{
                users,
                name: req.query.userName,
                sortKey,
                loggedInUser: req.user,
                title: "Search"
            })
        })
});


module.exports = router
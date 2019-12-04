var User = require('../models/user');

module.exports = {
    newPost,
    createPost
}

function newPost (req,res){
    res.render('users/newpost')
}

function createPost (req, res){
    console.log(req.file , "-------------------", req.body);
    res.redirect('/home');
}
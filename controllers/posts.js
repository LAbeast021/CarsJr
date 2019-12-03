var User = require('../models/user');

module.exports = {
    newPost
}

function newPost (req,res){
    res.render('users/newpost')
}
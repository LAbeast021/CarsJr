var User = require('../models/user');

module.exports = {
    newPost,
    createPost
}

function newPost (req,res){
    res.render('users/newpost')
}

function createPost (req, res){
   User.findOne({_id: req.User._id},function(err, user){
       console.log(user);
       req.body.image = req.file.secure_url
       user.posts.push(req.body)
       user.save(function(err){
           res.redirect('/home');
       })
   })
}
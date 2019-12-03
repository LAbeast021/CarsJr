var User = require('../models/user');

module.exports = {
    userPage,
     newPost,
    profilePage
};

function profilePage(req,res){
    res.render('users/profile',{
      user:req.user
    })
  };
function userPage (req,res){
    User.findOne({_id: req.params.id}, function(err, user){
        console.log(user);
        res.render('users/user',{
            user
        })
    })
}
function newPost (req,res){
    res.render('users/newpost')
}

        // User.findOne({_id : req.user._id}, function(err, user){
        //     console.log(user)
        //     res.redirect('/');
        // })
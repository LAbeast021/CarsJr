var User = require('../models/user');
var Post = require('../models/post');
// var multer = require('multer');
// var uploading = multer({dest: 'uploads/'})


module.exports = {
    userPage,
    profilePage,
    // upload
};

function profilePage(req,res){
    Post.find({userId: req.user._id},function(err,posts){
        res.render('users/profile',{
            posts: posts.reverse(),
            loggedInUser: req.user,
            title: "Profile"
        })
    })
    // res.render('users/profile',{
    //   user:req.user,
    //   loggedInUser: req.user,
    //   title: "Profile"
    // })
  };
function userPage (req,res){
    Post.find({userId: req.params.id},function(err,posts){
        User.findOne({_id:req.params.id},function(err,user){
            res.render('users/user',{
                posts: posts.reverse(),
                user,
                loggedInUser: req.user,
                title: "User Profile"
            })
        })
    })
    // User.findOne({_id: req.params.id}, function(err, user){
    //     console.log(user);
    //     res.render('users/user',{
    //         user,
    //         loggedInUser: req.user,
    //         title: "User Profile"
    //     })
    // })
}



// function upload(req, res){
//     console.log(typeof(req.body.image));
//     Request(`${req.body.image}`, function(err,thing){
//         console.log(thing);
//     })
//     res.redirect('/home');
// }



        // User.findOne({_id : req.user._id}, function(err, user){
        //     console.log(user)
        //     res.redirect('/');
        // })
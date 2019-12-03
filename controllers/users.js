var User = require('../models/user');
// var multer = require('multer');
// var uploading = multer({dest: 'uploads/'})


module.exports = {
    userPage,
    profilePage,
    // upload
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
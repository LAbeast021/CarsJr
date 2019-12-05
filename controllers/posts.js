var User = require('../models/user');
var request = require("request");
const URL = 'https://private-anon-37cbdd5199-carsapi1.apiary-mock.com/manufacturers'
const url2  ="https://private-anon-37cbdd5199-carsapi1.apiary-mock.com/cars"
// LIST OF MANUFACTORS IN NAME PROPERTY AND ALL CAR MODELS IN MODEL

module.exports = {
    newPost,
    createPost,
    createComment,
    deleteComment
}
// ////////////////////////////////////


function newPost (req,res){
    request(URL , function(err, response, body){
        var cars = JSON.parse(body);
        res.render('users/newpost',{cars})
    })
}


// //////////////////
function createPost (req, res){
   User.findOne({_id: req.user._id},function(err, user){
       console.log(user);
       req.body.image = req.file.secure_url
       user.posts.push(req.body)
       user.save(function(err){
           res.redirect('/home');
       })
   })
}
function createComment (req, res){
    User.findOne({_id: req.params.id}, function(err, user){
       
        user.posts.find( post => {
            if(post._id == req.query.postId){
                req.body.visitorId = req.user._id
                req.body.visitorAvatar = req.user.avatar
                req.body.visitorName = req.user.name
                post.comments.push(req.body)
                user.save(function(err){
                    if (err) console.log(err);
                }) 
            }   
        })
        res.redirect(`back`);
    })
};
function deleteComment (req, res){
    User.findOne({_id: req.params.id},function(err, user){
        user.posts.find( post => {
            if(post._id == req.query.postId){
                post.comments.splice(req.query.commentIdx , 1)
            }
            user.save(function(err){
                if (err) console.log(err)
            })
        })
        res.redirect(`back`);
    })
}

 // console.log('STEP 1: GETTING TO THE FUNCTION WITH RIGHT INFORMATION', req.body, req.params.id, req.query)
    // console.log("STEP 2: FIND THE RIGHT USER", user);
    // console.log(" STEP 2,B :FIND THE USERS POSTS", post);
    // console.log('STEP 3: FINDING THE RIGHT POST');
    // console.log("STEP 4: ADDIN THE COMMENTER TO REQ.BODY", req.body);
    // console.log("STEP 5: PUSHING THE COMMENT TO THE RIGHT POST", post.comments);
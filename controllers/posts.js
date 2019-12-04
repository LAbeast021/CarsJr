var User = require('../models/user');

module.exports = {
    newPost,
    createPost,
    createComment
}

function newPost (req,res){
    res.render('users/newpost')
}

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
        // FIND THE POST USING THE REQ.QUERY.POSTID AND THEN PUSH THE REQ.BODY WITH USER._ID ADDED TO visitorid TO THE COMMENTS ARRAY OF THAT POST
        user.posts.find( post => {
            if(post._id === req.query.postId){
                req.body.visitorId = req.user._id
                req.body.visitorAvatar = req.user.avatar
                req.body.visitorName = req.user.name
                user.post.comments.push(req.body)
                user.save(function(err){
                    res.redirect('/home');
                })
            }
        })
        
    })
}
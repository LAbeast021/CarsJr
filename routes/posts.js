var express = require('express');
var router = express.Router();
var User = require('../models/user')
var Post = require('../models/post')
var multer = require('multer');
var cloudinary = require('cloudinary');
var cloudinaryStorage = require('multer-storage-cloudinary');
var storage = cloudinaryStorage({
    cloudinary, 
    filename: function (req, file, cb) {
        cb(null, new Date().toISOString() + file.originalname );
      },
    allowedFormats: ["jpg", "jpeg", "png"],
});
var upload = multer({storage})
var postsCtrl = require('../controllers/posts');



router.post('/comment/:id' , postsCtrl.createComment);
router.delete('/comment/:id', postsCtrl.deleteComment)
router.post('/upload', upload.single('image') , postsCtrl.createPost)
router.get('/new',isLoggedIn ,postsCtrl.newPost);
// ////////////////////////////////////////////////////////////////////////////
router.get('/edit/:id',isLoggedIn ,function(req,res,next){
  Post.findOne({userId:req.user._id},function(err,post){
      var value = post.caption;
      res.render('users/edit-caption',{
        idx:req.params.id,
        value,
        id: req.user._id
      })
    }) 
})
router.post('/edit/:id', function(req,res){
  User.findOne({_id:req.user._id},function(err, user){
    user.posts[req.params.id].caption = req.body.caption
    user.save(function(err){
      res.redirect(`/users/profile/${req.user._id}`)
    })
  })
})


function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect('/auth/google');
  }


module.exports = router;
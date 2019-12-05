var express = require('express');
var router = express.Router();
var multer = require('multer');
var cloudinary = require('cloudinary');
var cloudinaryStorage = require('multer-storage-cloudinary');
var storage = cloudinaryStorage({
    cloudinary, 
    filename: function (req, file, cb) {
        cb(null, new Date().toISOString() + file.originalname );
      }   
});
var upload = multer({storage})
var postsCtrl = require('../controllers/posts');



router.post('/comment/:id' , postsCtrl.createComment);
router.delete('/comment/:id', postsCtrl.deleteComment)
router.post('/upload', upload.single('image') , postsCtrl.createPost)
router.get('/new',isLoggedIn ,postsCtrl.newPost);


function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect('/auth/google');
  }


module.exports = router;
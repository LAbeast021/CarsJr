var express = require('express');
var router = express.Router();
var multer = require('multer');
var cloudinary = require('cloudinary');
var cloudinaryStorage = require('multer-storage-cloudinary');
var storage = cloudinaryStorage({
    cloudinary,    
});
var upload = multer({storage})
var postsCtrl = require('../controllers/posts');



router.post('/comment/:id' , postsCtrl.createComment)
router.post('/upload', upload.single('image') , postsCtrl.createPost)
router.get('/new', postsCtrl.newPost)


module.exports = router;
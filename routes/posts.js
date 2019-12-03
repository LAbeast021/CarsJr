var express = require('express');
var router = express.Router();
var multer = require('multer');
var upload = multer({dest: 'upload/'})
var User = require('../models/user');
var postsCtrl = require('../controllers/posts');


router.post('/upload', upload.single('image') , function (req, res){
    console.log(req.file , "-------------------", req.body);
    res.redirect('/home');
})
router.get('/new', postsCtrl.newPost)


module.exports = router;
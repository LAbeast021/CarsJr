var express = require('express');
var router = express.Router();
var multer = require('multer');
var upload = multer({dest: 'upload/'})
var User = require('../models/user');
var usersCtrl = require('../controllers/users');



router.get('/profile/:id',usersCtrl.profilePage )
router.post('/upload', upload.single('image') , function (req, res){
    console.log(req.file , "-------------------", req.body);
    res.redirect('/home');
})
router.get('/newpost', usersCtrl.newPost)
router.get('/:id', usersCtrl.userPage)


usersCtrl.upload
module.exports = router;

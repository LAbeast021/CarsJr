var express = require('express');
var router = express.Router();
var User = require('../models/user');
var usersCtrl = require('../controllers/users');



router.get('/profile/:id',usersCtrl.profilePage )
router.get('/:id', usersCtrl.userPage)


module.exports = router;

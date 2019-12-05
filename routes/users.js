var express = require('express');
var router = express.Router();
var User = require('../models/user');
var usersCtrl = require('../controllers/users');



router.get('/profile/:id',isLoggedIn,usersCtrl.profilePage );
router.get('/:id', isLoggedIn,usersCtrl.userPage);


function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect('/auth/google');
  }


module.exports = router;

var express = require('express');
var router = express.Router();

router.get('/', function(req,res){
    console.log(req.query)
    res.redirect('/home');
})


module.exports = router
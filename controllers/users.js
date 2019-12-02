var User = require('../models/user');

module.exports = {
    show,
};

function show (req,res){
    User.findOne({_id: req.params.id}, function(err, user){
        console.log(user);
        res.render('user',{
            user
        })
    })


}
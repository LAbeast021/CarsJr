var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var commentSchema = new Schema ({
    comment:String
},{
    timestamps:true
})

var postSchema = new Schema({
    image: String,
    brand:String,
    model: String,
    year: Date,
    horsePower: Number,
    caption: String,
    comments:[commentSchema]

},{
    timestamps:true
})
var userSchema = new Schema ({
    name:String,
    email:String,
    avatar:String,
    googleId:String,
    posts:[postSchema]
},{
    timestamps:true
});

module.exports = mongoose.model('User',userSchema);
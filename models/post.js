var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var commentSchema = new Schema ({
    comment:String,
    visitorId: String,
    visitorAvatar: String,
    visitorName: String
},{
    timestamps:true
})

var postSchema = new Schema({
    image: String,
    postWidth:Number,
    postHeight:Number,
    brand:String,
    model: String,
    year: String,
    engine:String,
    horsePower: Number,
    caption: String,
    userId: String,
    username: String,
    userAvatar: String,
    comments:[commentSchema]

},{
    timestamps:true
})


module.exports = mongoose.model('Post',postSchema);
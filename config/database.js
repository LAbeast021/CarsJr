var mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  });
//  ////////////////////// TO CHECK WE ARE CONNECTED AND WHERE WE ARE CONNECTED TO /////////////////////////
var db = mongoose.connection;

db.on('connected', function (err) {
  console.log(`Connected to MongoDB at ${db.host}:${db.port}`);
});
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create the schema

var userSchema = new Schema({
  title:String,
  champion:String,
  aboutyou:String,
  guide:String,
  playstyle:String,
  steamID:Number
});

//initiliaze the model

var User = mongoose.model('User', userSchema)

module.exports = User
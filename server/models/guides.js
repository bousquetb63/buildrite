var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create the schema

var guideSchema = new Schema({
  title:String,
  champion:String,
  aboutyou:String,
  guide:String,
  playstyle:String,
  steamID:Number
});

//initiliaze the model

var Guide = mongoose.model('Guide', guideSchema)


module.exports = Guide;

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var guidesSchema = new Schema({
  title:String,
  champion:String,
  aboutyou:String,
  guide:String,
  playstyle:String,
  steamID:Number
});


module.exports = guidesSchema

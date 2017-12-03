var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create the schema

var guideSchema = new Schema({
  title: String,
  author: String,
  champion: String,
  battlerites: [
    {
      name: String,
      img: String
    }
  ]
  guide: String,
  hidden: { type: Boolean, default: false },
  created_at: { type: Date, default: Date.now }
});

//initiliaze the model

var Guide = mongoose.model('Guide', guideSchema)


module.exports = Guide;

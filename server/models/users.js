var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create the schema

var userSchema = new Schema({
  email: { type: String, required: true, unique: true },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true},
  created_at: { type: Date, default: Date.now },
  banned: { type: Boolean, default: false},
  admin: { type: Boolean, default: false}
});

//initiliaze the model

var User = mongoose.model('User', userSchema)


module.exports = User;

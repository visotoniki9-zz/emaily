const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: String,
  username: String,
  email: String,
  img: String,

});

mongoose.model('users', userSchema);

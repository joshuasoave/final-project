const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  favorites: {type: Array, default: []}
})

const User = mongoose.model('User', userSchema);

module.exports = User;

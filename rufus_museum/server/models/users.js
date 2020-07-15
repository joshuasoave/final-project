const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  favorites: {type: Array, default: []}
})

const Users = mongoose.model('User', userSchema);

module.exports = Users;

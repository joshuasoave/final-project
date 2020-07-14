const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  title: String,
  date: String,
  time: String,
  image: String,
  price: String,
  location: String,
  description: String
});

const Events = mongoose.model('Event', eventSchema);

module.exports = Events;

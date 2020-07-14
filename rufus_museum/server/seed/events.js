const mongoose = require('mongoose');
const Events = require('../models/events.js');

const events = [
  {
    title: "Jazz Friday",
    date: "July 24 2020",
    time: "6-9pm",
    image: "https://i.imgur.com/kA1JyAb.jpg",
    price: "Free",
    location: "Online",
    description: "Join us on the fourth Friday for every month for Jazz Friday! Each month we feature a different style of Jazz music from musicians across the country."
  },
  {
    title: "Homeric Authorship",
    date: "July 27 2020",
    time: "2-3pm",
    image: "https://i.imgur.com/rpuooGc.jpg",
    price: "Free",
    location: "Online",
    description: "Attend this session on The Homeric Question. Who was Homer and what works was Homer responsible for creating? We'll explore these topics and more in this free session."
  }
]

module.exports = events;

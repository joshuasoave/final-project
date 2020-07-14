const express = require('express');
const router = express.Router();
const Events = require('../models/events.js');
const eventSeed = require('../seed/events.js');

/////////////
//Create
///////////
router.post('/', (req, res) => {
  Events.create(req.body, (err, createdEvent) => {
    res.json(createdEvent);
  });
});

///////////
//Seed
/////////
router.get('/seed', (req, res) => {
  Events.create(eventSeed)
  res.redirect('/events')
});

/////////
//Get
////////
router.get('/', (req, res) => {
  Events.find({}, (err, allEvents) => {
    res.json(allEvents);
  });
});

module.exports = router;

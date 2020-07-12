const express = require('express');
const router = express.Router();
const Artifacts = require('../models/artifacts.js');

///////
//Create
/////
router.post('/', (req, res) => {
  Artifacts.create(req.body, (err, createdArtifact) => {
    res.json(createdArtifact);
  });
});

/////////
//Get
////////
router.get('/', (req, res) => {
  Artifacts.find({}, (err, foundArtifacts) => {
    res.json(foundArtifacts);
  });
});

///////
//Delete
/////
router.delete('/:id', (req, res) => {
  Artifacts.findByIdAndRemove(req.params.id, (err, deletedArtifact) => {
    res.json(deletedArtifact);
  });
});

/////
//update
////
router.put('/:id', (req, res) => {
  Artifacts.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedArtifact) => {
    res.json(updatedArtifact);
  });
});

module.exports = router;
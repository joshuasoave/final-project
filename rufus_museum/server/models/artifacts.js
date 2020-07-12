const mongoose = require('mongoose');

const artifactSchema = new mongoose.Schema({
  Name: String,
  Description: String,
  Image: String,
  Creator: String,
  Year: Number,
  Theme: String
});

const Artifacts = mongoose.model('Artifact', artifactSchema);

module.exports = Artifacts;

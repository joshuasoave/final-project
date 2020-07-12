const mongoose = require('mongoose');

const artifactSchema = new mongoose.Schema({
  name: String,
  description: String,
  image: String,
  creator: String,
  year: String,
  theme: String
});

const Artifacts = mongoose.model('Artifact', artifactSchema);

module.exports = Artifacts;

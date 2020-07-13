const mongoose = require('mongoose');
const Artifacts = require('../models/artifacts.js');

const artifacts = [
  {
    name: "Nefertiti Bust",
    description: "The bust is 48 centimetres tall and weighs about 20 kilograms. It is made of a limestone core covered with painted stucco layers. The face is completely symmetrical and almost intact, but the left eye lacks the inlay present in the right.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Nofretete_Neues_Museum.jpg/440px-Nofretete_Neues_Museum.jpg",
    creator: "Thutmose",
    year: "1345 BC",
    theme: "Egypt"
  },
  {
    name: "The Pleiades",
    description: "The Pleiades are a prominent sight in winter in the Northern Hemisphere, and are easily visible out to mid-Southern latitudes. They have been known since antiquity to cultures all around the world.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Pleiades_large.jpg/560px-Pleiades_large.jpg",
    creator: "Unknown",
    year: "Between 75 and 150 Million Years Old",
    theme: "Space"
  },
  {
    name: "The Metamorphosis of Narcissus",
    description: "In Dalí's painting, he depicts the figure of Narcissus on the left side of the canvas crouched by a lake, with his head resting on his knee, and a stone hand clutching an egg mirroring the shape of his body on the right. From out of the cracked egg, a narcissus flower sprouts. In the mid-ground of the painting stand a group of Narcissus's rejected suitors.",
    image: "https://upload.wikimedia.org/wikipedia/en/2/21/Metamorphosis_of_Narcissus.jpg",
    creator: "Salvador Dalí",
    year: "1937",
    theme: "Surrealism"
  },
  {
    name: "Kissing Lovers",
    description: "Rukodzi’s 'Kissing Lovers', created from Springstone, represents the greeting of a reunited couple and the strong spiritual bond that ties them together. The two figures, both seen in profile, merge to create the image of one figure.",
    image: "https://web.archive.org/web/20110627013558im_/http://www.atlanta-airport.com/passenger/art%20program/Images/KISSING_LOVERS_large.jpg",
    creator: "Endronce Rukodzi",
    year: "2011",
    theme: "Featured"

  }
]

module.exports = artifacts;

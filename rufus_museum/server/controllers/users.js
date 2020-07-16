const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const Users = require('../models/users.js');
const Artifacts = require('../models/artifacts.js');

/////////
//Create
////////
router.post('/', (req, res) => {
  //bcrypt the entered password
  req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10));
  Users.create(req.body, (err, createdUser) => {
    //set the newly created user to the session
    req.session.user = createdUser;
    res.json(createdUser);
  })
});


///////////
//Get
///////////
router.get('/', (req, res) => {
  Users.find({}, (err, allUsers) => {
    res.json(allUsers)
  })
})

router.put('/:id/remove', () => {

})

////////////////////////////
//Update user favorites
//////////////////////////
router.put('/:id', (req, res) => {
  //use the exhibit id from the page link
  Artifacts.findById(req.params.id, (err, foundArtifact) => {
    //can log the found artifact
    // console.log(foundArtifact);
    //use the session user id to find the current user
    Users.findById(req.session.user._id, (err, foundUser) => {
      //can log the user
      // console.log(currentUser);
        foundUser.favorites.push(foundArtifact)
      //used the save feature to keep the object in user favorite array
      //https://mongoosejs.com/docs/api.html#model_Model-save
      foundUser.save((error, data) => {
        res.json(data)
      })
    })
  })
})

module.exports = router;

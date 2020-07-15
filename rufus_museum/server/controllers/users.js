const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const Users = require('../models/users.js');


router.post('/', (req, res) => {
  //bcrypt the entered password
  req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10));
  Users.create(req.body, (err, createdUser) => {
    //set the newly created user to the session
    req.session.user = createUser;
    res.json(createdUser);
  })
});

router.get('/', (req, res) => {
  Users.find({}, (err, allUsers) => {
    res.json(allUsers)
  })
})

module.exports = router;

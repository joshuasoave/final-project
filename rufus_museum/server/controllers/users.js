const express = require('express');
const router = express.Router();
const Users = require('../models/users.js');
const bcrypt = require('bcrypt');

router.post('/', (req, res) => {
  req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10));
  Users.create(req.body, (err, createdUser) => {
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

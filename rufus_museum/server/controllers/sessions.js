const express = require('express');
const router = express.Router();
const User = require('../models/users.js');
const bcrypt = require('bcrypt');

router.post('/', (req, res) => {
  User.findOne({username:req.body.username}, (err, foundUser) => {
    if(foundUser === null){
      res.json({
        message: 'user not found'
      })
    } else {
        const doesPasswordMatch =
        //check to see if the password entered matches the users password
         bcrypt.compareSync(req.body.password, foundUser.password);
        if(doesPasswordMatch){
          res.json(foundUser)
        } else {
          res.json({
            message: 'user not found'
          });
        }
    }
  });
});

module.exports = router;

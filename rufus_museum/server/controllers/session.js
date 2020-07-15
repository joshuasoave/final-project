const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();
const Users = require('../models/users.js');


router.post('/', (req, res) => {
  Users.findOne({username:req.body.username}, (err, foundUser) => {
    if(foundUser === null){
      res.json({
        message: 'user not found'
      })
    } else {
        const doesPasswordMatch =
        //check to see if the password entered matches the users password
         bcrypt.compareSync(req.body.password, foundUser.password);
        if(doesPasswordMatch){
          req.session.user = foundUser;
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

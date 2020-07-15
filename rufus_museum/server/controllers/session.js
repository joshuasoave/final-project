const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();
const Users = require('../models/users.js');

//////////
//Create
////////
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
         //if it does, set that to session
        if(doesPasswordMatch){
          req.session.user = foundUser;
          res.json(foundUser)
        } else {
          //otherwise, error message
          res.json({
            message: 'user not found'
          });
        }
    }
  });
});

////////////
//Get
//////////
router.get('/', (req, res) => {
  //send the session.user if there is one
  res.json(req.session.user)
});

///////////
//Delete
/////////
router.delete('/', (req, res) => {
  req.session.destroy(() => {
    res.json({
      destroyed: true
    })
  })
})

module.exports = router;

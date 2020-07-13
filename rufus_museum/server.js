//////////////
//Dependencies
/////////////
const express = require('express');
const app = express();
const mongoose = require('mongoose')
const db = mongoose.connection;
require('dotenv').config();

/////////
//Port
////////
const PORT = 5000

///////////
//Database
//////////
const MONGODB_URI = process.env.MONGODB_URI

///////////
//Db connect
//////////
mongoose.connect(MONGODB_URI , { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }
)
//Error handling
db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected: ', MONGODB_URI));
db.on('disconnected', () => console.log('mongo disconnected'));

////////////
//controllers
////////////
const artifactsController = require('./server/controllers/artifacts.js');

//////////
//middleware
/////////
app.use(express.json());
app.use('/artifacts', artifactsController);

////////
//Listen
///////
app.listen(PORT, () => {
  console.log(
    'listening'
  );
});

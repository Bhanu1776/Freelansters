// const dotenv = require('dotenv');
const mongoose = require('mongoose');

// dotenv.config()
const DB = process.env.DATABASE;

mongoose.connect(DB).then(() => {
  console.log('Connection successful');
}).catch((err) => console.log('Connection Unsuccessful :(', err));

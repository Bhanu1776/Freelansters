const mongoose = require('mongoose');

const DB = process.env.DATABASE;

mongoose.connect(DB).then(() => {
    console.log('connection successful');
}).catch((err) => console.log('Connection Unsuccessful :('));

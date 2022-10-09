const dotenv = require('dotenv');
const mongoose = require('mongoose');
const express = require('express');
const app = express();

dotenv.config({ path: './config.env' });

const PORT = process.env.PORT;
require('./db/conn.js')

// const User = require('./model/userSchema');

app.use(express.json());                        // To convert the json files into objects, just to understand the javascript

app.use(require('./router/auth'));

const middleware = (req, res, next) => {
    console.log('Hello Im a middleware');
    next();
}

app.get('/', (req, res) => {
    res.send('Hello world from the server');
})
app.get('/Login', (req, res) => {
    res.send('Hello world from the Login server');
})
app.get('/FindJobs', middleware, (req, res) => {
    res.send('Hello world from the FJ server');
})
app.get('/FindFreelancer', (req, res) => {
    res.send('Hello world from the FF server');
})


app.listen(PORT, () => {
    console.log(`Server is running at port no ${PORT}`);
})
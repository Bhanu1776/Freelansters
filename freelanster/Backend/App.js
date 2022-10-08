const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello world from the server');
})
app.get('/Login', (req, res) => {
    res.send('Hello world from the Login server');
})
app.get('/FindJobs', (req, res) => {
    res.send('Hello world from the FJ server');
})
app.get('/FindFreelancer', (req, res) => {
    res.send('Hello world from the FF server');
})


app.listen(3000, () => {
    console.log('Server is running at port no 3000');
})
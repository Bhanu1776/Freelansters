const dotenv = require('dotenv');
const express = require('express');
const cookie_parser = require('cookie-parser')
const app = express();

dotenv.config({ path: './config.env' });

const PORT = process.env.PORT || 5000;
require('./db/conn.js')

const FJSchema = require('./model/FJSchema');
const FFSchema = require('./model/FFSchema');
const tempSchema = require('./model/tempSchema');

app.use(express.json());                        // To convert the json files into objects, just to understand the javascript
app.use(cookie_parser());
app.use(require('./router/auth'));



app.get('/', (req, res) => {
    app.use(express.static(path.resolve(__dirname, 'Client', 'build')))
    res.sendFile(path.resolve(__dirname, 'Client', 'build', 'index.html'))
})

app.get('/Login', (req, res) => {
    res.send('Hello world from the Login server');
})
app.get('/register', (req, res) => {
    res.send('Hello world from the Login server');
})

app.post('/Jobs', (req, res) => {
    const Jobs = FJSchema(req.body);
    Jobs.save();
    res.send(req.body);
})

app.get('/JobsFetch', async (req, res) => {
    const JobsFetch = await FJSchema.find({});
    res.json({
        data: JobsFetch
    })
})

app.post('/Freelancers', (req, res) => {
    const Freelancers = FFSchema(req.body);
    Freelancers.save();
    res.send(req.body);
})

app.post('/tempSchema', (req, res) => {
    const temp = tempSchema(req.body);
    temp.save();
    res.send(req.body);
})

app.get('/FreelancersFetch', async (req, res) => {
    const FreelancersFetch = await FFSchema.find({});
    res.json({
        data: FreelancersFetch
    })
})

app.listen(PORT, () => {
    console.log(`Server is running at port no ${PORT}`);
})
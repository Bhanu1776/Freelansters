const dotenv = require('dotenv');
const express = require('express');
const cookie_parser = require('cookie-parser')
const app = express();

dotenv.config({ path: './config.env' });

const PORT = process.env.PORT;
require('./db/conn.js')

const FJSchema = require('./model/FJSchema');
const FFSchema = require('./model/FFSchema');
const tempSchema = require('./model/tempSchema');

app.use(express.json());                        // To convert the json files into objects, just to understand the javascript
app.use(cookie_parser());
app.use(require('./router/auth'));


app.get('/', (req, res) => {
    res.send('Hello world from the server');
})
app.get('/Login', (req, res) => {
    res.send('Hello world from the Login server');
})
app.get('/register', (req, res) => {
    res.send('Hello world from the Login server');
})
app.get('/otp', (req, res) => {
    res.send('Hello world from the Login server');

    const twilio = require('twilio');
    var otp = parseInt(Math.random() * 100000);
    const accountSid = 'AC1a240acde71a76e682f8ec05da6c266d';
    const authToken = 'dfc03a5b85c077c952a4b9b9014543d6';
    const client = new twilio(accountSid, authToken);

    client.messages
        .create({
            body: `Your OTP for signing into Freelanster account is ${otp}`,
            to: '+919619349968', // Don't you dare to call me!!
            from: '+18563862117', // From a valid Twilio number
        })
        .then((message) => console.log(message.sid));
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
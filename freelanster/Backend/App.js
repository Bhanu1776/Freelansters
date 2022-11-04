const dotenv = require('dotenv');
const express = require('express');
const cookie_parser = require('cookie-parser')
const app = express();


dotenv.config({ path: './config.env' });

const PORT = process.env.PORT;
require('./db/conn.js')

const FJSchema = require('./model/FJSchema');
// const User = require('./model/userSchema');

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
// app.get('/FindJobs', (req, res) => {jobs
//     res.send('Hello world from the FJ server');
// })
app.get('/FindFreelancer', (req, res) => {
    res.send('Hello world from the FF server');
})
// app.get('/About', (req, res) => {
//     console.log("Hello Im About");
//     res.send('Hello About world from the server')
// })


app.post('/Jobs', (req, res) => {
    console.log(req.body);
    const Jobs = FJSchema(req.body);
    Jobs.save();
    res.send(req.body);

})
// app.get('/JobsFetch', async (req, res) => {
//     const jobsFetch = await FJSchema.find({});
//     res.json({
//         data: jobsFetch
//     })
// })

app.listen(PORT, () => {
    console.log(`Server is running at port no ${PORT}`);
})
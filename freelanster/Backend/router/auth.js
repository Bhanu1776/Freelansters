const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hello world from the router js');
})


router.post('/Login', (req, res) => {

    const { FullName, email, phone, password, cpassword } = req.body;

    if (!FullName || !email || !phone || !password || !cpassword) {             // If user doesn't fill any of the values then it will simply return error
        return res.status(422).json({ error: "Pls fill all the values properly!" });
    }


    // console.log(email);
    res.json({ message: req.body });            // This is used to display output in thunder client 
})
module.exports = router;


//* HTTPS Status codes ==> https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
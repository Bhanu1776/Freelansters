const express = require('express');
const router = express.Router();

require('../db/conn');
const User = require('../model/userSchema');


router.get('/', (req, res) => {
    res.send('Hello world from the router js');
})

router.post('/Login', async (req, res) => {

    const { FullName, email, phone, password, cpassword } = req.body;

    if (!FullName || !email || !phone || !password || !cpassword) {             // If user doesn't fill any of the values then it will simply return error
        return res.status(422).json({ error: "Pls fill all the values properly!" });
    }

    try {
        const userExist = await User.findOne({ email: email });

        if (userExist) {
            return res.status(422).json({ error: "Email already Exist" });
        }

        const user = new User({ FullName, email, phone, password, cpassword });

        await user.save();
        res.status(201).json({ message: "User registered successfully" })
    }
    catch (err) {
        console.log(err);
    }

})
module.exports = router;


//* HTTPS Status codes ==> https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
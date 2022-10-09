const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');

require('../db/conn');
const User = require('../model/userSchema');


router.get('/', (req, res) => {
    res.send('Hello world from the router js');
})

// SingUp Route

router.post('/Signup', async (req, res) => {

    const { FullName, email, phone, password, cpassword } = req.body;

    if (!FullName || !email || !phone || !password || !cpassword) {             // If user doesn't fill any of the values then it will simply return error
        return res.status(422).json({ error: "Pls fill all the values properly!" });
    }

    try {
        const userExist = await User.findOne({ email: email });                 // left one is database email and right one is input email!!

        if (userExist) {
            return res.status(422).json({ error: "Email already Exist" });
        }
        else if (password != cpassword) {
            return res.status(422).json({ error: "Password didn't match" });
        }
        else {
            const user = new User({ FullName, email, phone, password, cpassword });
            // Hashing the password will occur here!
            await user.save();
            res.status(201).json({ message: "User registered successfully" })
        }
    }
    catch (err) {
        console.log(err);
    }
})

// Login Route

router.post('/Login', async (req, res) => {

    try {
        const { email, password } = req.body;

        if (!email || !password) {                                          // If both fields are empty
            return res.status(400).json({ error: "Please Fill the Data!!" });
        }

        const userLogin = await User.findOne({ email: email });

        const isMatch = await bcrypt.compare(password, userLogin.password);

        if (userLogin) {                // This condition is to check email
            if (!isMatch) {             // And this to check password
                res.status(400).json({ error: "Invalid Credentials" });
            } else {
                res.json({ message: "User SignIn Successfully " })
            }
        }
        else {
            res.status(400).json({ error: "Invalid Credentials" });
        }


    }
    catch (err) {
        console.log(err);
    }
})

module.exports = router;


//* HTTPS Status codes ==> https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
// const jwt = require('jsonwebtoken');
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const authenticate = require('../middleware/authenticate');

require('../db/conn');
const User = require('../model/userSchema');


router.get('/', (req, res) => {
    res.send('Hello world from the router js');
})

// SingUp Route

router.post('/register', async (req, res) => {

    const { name, email, phone, password, cpassword } = req.body;

    if (!name || !email || !phone || !password || !cpassword) {             // If user doesn't fill any of the values then it will simply return error
        return res.status(422).json({ error: "Pls fill all the values properly!" });
    }

    try {
        const userExist = await User.findOne({ email: email });                 // left one is database email and right one is input email!!

        if (userExist) {
            return res.status(422).json({ error: "Email already Exist" });
        }
        // eslint-disable-next-line eqeqeq
        else if (password != cpassword) {
            return res.status(422).json({ error: "Password didn't match" });
        }
        else {
            const user = new User({ name, email, phone, password, cpassword });
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

        if (userLogin) {                // This condition is to check email

            const isMatch = await bcrypt.compare(password, userLogin.password);
            const token = await userLogin.generateAuthToken();
            console.log(token);

            res.cookie("jwtoken1", token, {
                expires: new Date(Date.now() + 25892000000),
                httpOnly: true
            })

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
});


//* AboutUs Page
router.get('/About', authenticate, (req, res) => {
    console.log("Hello Im About");
    res.send(req.rootUser);
})

//* FindJobs Page
router.get('/Findjobs', authenticate, (req, res) => {
    console.log("Hello Im FJ");
    res.send(req.rootUser);
})

//* LogOut Page
router.get('/Logout', (req, res) => {
    console.log("Byee Loging Out");
    res.clearCookie('jwtoken1', { path: '/' })
    res.status(200).send('User Logout');
});

module.exports = router;


//* HTTPS Status codes ==> https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
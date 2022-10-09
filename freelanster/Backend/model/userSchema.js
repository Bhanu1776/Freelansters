const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    FullName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    cpassword: {
        type: String,
        required: true
    },
})

const User = mongoose.model('Users', userSchema)

module.exports = User;
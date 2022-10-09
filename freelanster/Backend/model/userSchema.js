const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

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


//* Code for hashing the password

userSchema.pre('save', async function (next) {       // Bcoz of 'pre' method, 'next' func will automatically call itself before save() func in auth.js..
    if (this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 12);
        this.cpassword = await bcrypt.hash(this.cpassword, 12);
    }
});

//* Collection Creation
const User = mongoose.model('Users', userSchema)

module.exports = User;
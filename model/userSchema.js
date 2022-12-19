const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: Number,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    cpassword: {
        type: String,
        required: true
    },

    special: {
        type: String,
    },
    time: {
        type: String,
    },
    price: {
        type: Number,
    },
    description: {
        type: String,
    },
    img: {
        type: String,
    },
    reviews: {
        type: String,
    },
    stars: {
        type: Number,
    },
    tokens: [
        {                                       // There are going to be many tokens right thats why taking an array.
            token: {
                type: String,
                required: true
            }
        }
    ],
}, {
    timestamps: true
}
)


//* Code for hashing the password

userSchema.pre('save', async function (next) {       // Bcoz of 'pre' method, 'next' func will automatically call itself before save() func in auth.js..
    if (this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 12);
        this.cpassword = await bcrypt.hash(this.cpassword, 12);
    }
});

//* For generating token
userSchema.methods.generateAuthToken = async function () {
    try {
        let token = jwt.sign({ _id: this._id }, process.env.SECRET_KEY)
        this.tokens = this.tokens.concat({ token: token });
        await this.save();
        return token;
    }
    catch (err) {
        console.log("🚀 ~ file: userSchema.js:83 ~ err", err)
    }
}

//* Collection Creation
const User = mongoose.model('Users', userSchema)

module.exports = User;
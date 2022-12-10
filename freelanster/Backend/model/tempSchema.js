const mongoose = require('mongoose');

const tempSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
        // required: true,
        unique: true
    },
    phone: {
        type: Number,
        unique: true
    },
    password: {
        type: String,
        // required: true
    },
    cpassword: {
        type: String,
        // required: true
    },
    Jobs: {
        category: {
            type: String,
        },
        date: {
            type: String,
        },
        duration: {
            type: String,
        },
        description: {
            type: String,
        },
        price: {
            type: String,
        },
        img: {
            type: String,
        },
    },
    Freelancers: {
        title: {
            type: String,
        },
        hours: {
            type: Number,
        },
        price: {
            type: Number,
        },
        special: {
            type: String,
        },
        time: {
            type: String,
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
    },
},
    {
        timestamps: true
    })

//* Collection Creation
const temp = mongoose.model('temp', tempSchema)

module.exports = temp;
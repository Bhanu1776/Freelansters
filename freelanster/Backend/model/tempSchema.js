const mongoose = require('mongoose');

const tempSchema = new mongoose.Schema({
    name: {
        type: String,
        // required: true
    },
    email: {
        type: String,
        // required: true,
        unique: true
    },
    phone: {
        type: Number,
        // required: true,
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
            // required: true
        },
        date: {
            type: String,
            // required: true
        },
        duration: {
            type: String,
            // required: true
        },
        description: {
            type: String,
            // required: true
        },
        price: {
            type: String,
            // required: true
        },
        img: {
            type: String,
            // required: true
        },
    },
    Freelancers: {
        title: {
            type: String,
            // required: true
        },
        hours: {
            type: Number,
            // required: true
        },
        price: {
            type: Number,
            // required: true
        },
        special: {
            type: String,
            // required: true
        },
        time: {
            type: String,
            // required: true
        },
        description: {
            type: String,
            // required: true
        },
        img: {
            type: String,
            // required: true
        },
        reviews: {
            type: String,
            // required: true
        },
        stars: {
            type: Number,
            // required: true
        },
    },
},
    {
        timestamps: true
    })

//* Collection Creation
const temp = mongoose.model('temp', tempSchema)

module.exports = temp;
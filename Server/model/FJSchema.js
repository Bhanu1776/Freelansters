const mongoose = require('mongoose');


const FJSchema = new mongoose.Schema({
    category: {
        type: String,
        // required: true
    },
    title: {
        type: String,
        required: true
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
        required: true
    },
    price: {
        type: String,
        // required: true
    },
    image: {
        type: String,
        // required: true
    },

}, {
    timestamps: true
})

//* Collection Creation
const Jobs = mongoose.model('Jobs', FJSchema)

module.exports = Jobs;
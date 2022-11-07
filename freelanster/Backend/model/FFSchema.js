const mongoose = require('mongoose');


const FFSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    hours: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },

})

//* Collection Creation
const Freelancers = mongoose.model('Freelancers', FFSchema)

module.exports = Freelancers;
const mongoose = require('mongoose');


const FJSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },

}, {
    timestamps: true
})

//* Collection Creation
const Jobs = mongoose.model('Jobs', FJSchema)

module.exports = Jobs;
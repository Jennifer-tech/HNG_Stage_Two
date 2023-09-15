const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: true,
        trim: true,
    },
    email: {
        type: String
    },
    language: {
        type: String,
    },
    country: {
        type: String
    }
}, { timestamps: true })


const personModel = mongoose.model('Person', personSchema)
module.exports = personModel
const mongoose = require('mongoose');

const DataSchema = mongoose.Schema({
    date: {
        type: Date,
        default: Date.now
    },
    name: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    receiver: {
        type: String,
        required: true
    },
    depositAmount: {
        type: Number,
        required: true
    },
    depositNotes: {
        type: String,
    },
})

//'Deposits' is the table thats gonna show up in Mongo DB
module.exports = mongoose.model('Deposits', DataSchema);
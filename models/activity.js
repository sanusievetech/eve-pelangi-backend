const mongoose = require('mongoose');

const DataSchema = mongoose.Schema({
    date: {
        type: Date,
        default: Date.now
    },
    user: {
        type: String,
        required: true
    },
    customer: {
        name: {
            type: String,
            required: true
        },
        phone: {
            type: String,
            required: true
        },
        email: {
            type: String,
        }
    },
    product: {
        type: Array,
        required: true
    },
    notes: {
        type: String
    },
    total: {
        type: Number
    },
    payment: {
        name: {
            type: String,
        },
        cardNumber: {
            type: Number
        },
    },
})

//'Activities' is the table thats gonna show up in Mongo DB
module.exports = mongoose.model('Activities', DataSchema);
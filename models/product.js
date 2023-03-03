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
    image: {
        type: String
    },
    price: {
        type: Number,
        required: true
    },
})


//'Products' is the table thats gonna show up in Mongo DB
module.exports = mongoose.model('Products', DataSchema);
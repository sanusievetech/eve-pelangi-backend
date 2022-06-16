const mongoose = require('mongoose');


const UserSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    from: {
        type: String,
        required: true
    },
    to: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    totalPrice: {
        type: Number
    },
    deliveryPrice: {
        type: Number
    },
    paymentType: {
        type:String,
    },
    paymentStatus: {
        type:String,
    },
    offlineTransaction: {
        type:Boolean,
    },
    userTotalTransaction: {
        type: Number
    },
})


//'Users' is the table thats gonna show up in Mongo DB
module.exports = mongoose.model('Users', UserSchema);
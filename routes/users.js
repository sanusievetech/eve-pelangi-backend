const express = require('express');
const router = express.Router();
const User = require('../models/user');

//GETTING ALL THE USERS
router.get('/', async (req, res) => {
    try {
        const listofUsers = await User.find();
        res.json(listofUsers);
    } catch (err) {
        res.json({ message: err });
    }
});


//CREATE NEW USER
router.post('/:name/:phone/:from/:to/:totalPrice/:paymentStatus/:userTotalTransaction', async (req, res) => {
    console.log(req.body);
    try {
        const user = new User({
            name: req.params.name,
            phone: req.params.phone,
            from: req.params.from,
            to: req.params.to,
            totalPrice: req.params.totalPrice,
            paymentStatus: req.params.paymentStatus,
            userTotalTransaction: req.params.userTotalTransaction,
        });
        const newUser = await user.save();
        res.json(newUser);
    } catch (err) {
        res.json({ message: err });
    }
})


//GET A SPECIFIC USER
router.get('/:userId', async (req, res) => {
    try {
        const spesificUser = await User.findById(req.params.userId);
        res.json(spesificUser);
    } catch (err) {
        res.json({ message: err });
    }
});

//DELETE A SPECIFIC USER
router.delete('/:userId', async (req, res) => {
    try {
        const deletedUser = await User.remove({ _id: req.params.userId });
        res.json(deletedUser);
    } catch (err) {
        res.json({ message: err });
    }
});

//UPDATE A SPECIFIC USER
router.patch('/:id/:name/:phone/:from/:to/:totalPrice/:paymentStatus/:userTotalTransaction', async (req, res) => {
    try {
        const updatedUser = await User.updateOne(
            { _id: req.params.id },
            {
                $set: {
                    name: req.params.name,
                    phone: req.params.phone,
                    from: req.params.from,
                    to: req.params.to,
                    totalPrice: req.params.totalPrice,
                    paymentStatus: req.params.paymentStatus,
                    userTotalTransaction: req.params.userTotalTransaction,
                }
            }
        );
        res.json(updatedUser);
    } catch (err) {
        res.json({ message: err });
    }
});

module.exports = router;
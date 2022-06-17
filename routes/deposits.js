const express = require('express');
const router = express.Router();
const Deposit = require('../models/deposit');

// GETTING ALL THE DATA
router.get('/', async (req, res) => {
    try {
        const listofDeposits = await Deposit.find();
        res.json(listofDeposits);
    } catch (err) {
        res.json({ message: err });
    }
});

// CREATE NEW DATA
router.post('/:name/:phone/:receiver/:depositAmount/:depositNotes', async (req, res) => {
    console.log(req.body);
    try {
        const deposit = new Deposit({
            name: req.params.name,
            phone: req.params.phone,
            receiver: req.params.receiver,
            depositAmount: req.params.depositAmount,
            depositNotes: req.params.depositNotes,
        });
        const newDeposit = await deposit.save();
        res.json(newDeposit);
    } catch (err) {
        res.json({ message: err });
    }
})

// GET A SPECIFIC DATA
router.get('/:id', async (req, res) => {
    try {
        const spesificDeposit = await Deposit.findById(req.params.id);
        res.json(spesificDeposit);
    } catch (err) {
        res.json({ message: err });
    }
});

// UPDATE A SPECIFIC DATA
router.patch('/:id', async (req, res) => {
    try {
        const updatedDeposit = await Deposit.updateOne(
            { _id: req.params.id },
            {
                $set: req.body
            }
        );
        res.json(updatedDeposit);
    } catch (err) {
        res.json({ message: err });
    }
});

// DELETE A SPECIFIC DATA
router.delete('/:depositId', async (req, res) => {
    try {
        const deletedDeposit = await Deposit.remove({ _id: req.params.depositId });
        res.json(deletedDeposit);
    } catch (err) {
        res.json({ message: err });
    }
});

module.exports = router;
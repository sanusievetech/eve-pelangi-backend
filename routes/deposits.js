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
router.post('/create', async (req, res) => {
    try {
        const deposit = new Deposit(req.body);
        const newDeposit = await deposit.save();
        res.json(newDeposit);
    } catch (err) {
        res.json({ message: err });
    }
});

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
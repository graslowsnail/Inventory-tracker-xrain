const mongoose = require('mongoose');
const WorkDay = require('../models/WorkDay.js');

// GET all WorkDays
const getWorkDays = async (req, res) => {
    const workDays = await WorkDay.find();
    res.send(workDays);
};

// GET WorkDay By DATE
const getWorkDayByDate = async (req, res) => {
    try {
        const workday = await WorkDay.find({
            createdAt: {
                $gte: new Date(2023, 2, 29),
                $lt: new Date(2023, 2, 30)
            }
        })
            res.send(workday);
    } catch {
        res.status(404);
        res.send({ error: 'Part doesnt exist'});
    }
};

// CREATE workday
const createWorkDay = async (req, res) => {
    const workday = new WorkDay ({
        name: req.body.name,
        partsUsed: req.body.partsUsed,
    })
    await workday.save()
    res.send(workday);
};

// DELETE workDay
const deleteWorkDay = async(req, res) => {
    try{
        await WorkDay.deleteOne({ _id: req.params.id})
        res.status(204).send()
    } catch {
        res.status(404)
        res.send({ error: 'WorkDay doesnt exist'})
    }
};

// UPDATE a workDay
const updateWorkDay = async(req, res) => {
    try {
        const workday = await WorkDay.findOne({ _id: req.params.id})

        if (!workday) {
            return res.status(404).send({ error: 'Work Day not found'})
        }

        workday.name = req.body.name
        workday.partsUsed = req.body.partsUsed

        await WorkDay.findOneAndUpdate({ _id: req.params.id }, workday, { new: true })


        res.send(workday)
    } catch (err){
        res.status(500).send({ error: err.message })
    }
};


module.exports = {
    getWorkDays,
    createWorkDay,
    deleteWorkDay,
    updateWorkDay,
    getWorkDayByDate
};

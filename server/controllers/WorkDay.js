const mongoose = require('mongoose');
const WorkDay = require('../models/WorkDay.js');
const Part = require('../models/Part.js');

// GET all WorkDays
const getWorkDays = async (req, res) => {
  try {
    const workDays = await WorkDay.find();
    if (!workDays) {
      throw new Error('No workdays found');
    }
    res.status(200).json(workDays);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
// GET workDay by ID
const getWorkDayById = async (req, res) => {
    try{
        const workday = await WorkDay
            .findOne({ _id:req.params.id})
            .populate('partsUsed')
        res.send(workday);
    } catch {
        res.status(404);
        res.send({ error: 'workday doesnt exist!'});
    }
};


// GET WorkDay By DATE
// added startDate and endDate QUERY
const getWorkDayByDate = async (req, res) => {
    try {
        const { startDate, endDate } = req.query;

        if (!startDate || !endDate) {
            throw new Error('startDate and endDate are required');
        }

        const workday = await WorkDay.find({
            createdAt: {
                $gte: new Date(startDate),
                $lt: new Date(endDate)
            }
        }).populate('partsUsed');

        if (!workday) {
            throw new Error('No workday found for this date range');
        }

        res.send(workday);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
};

/*
    * CONTROLLER WITHOUT STARTDATE QURY
const getWorkDayByDate = async (req, res) => {
    try {
        const workday = await WorkDay.find({
            createdAt: {
                $gte: new Date(2023, 2, 29),
                $lt: new Date(2023, 2, 30)
            }
        }).populate('partsUsed')

            res.send(workday);
    } catch {
        res.status(404);
        res.send({ error: 'Part doesnt exist'});
    }
};
*/

// CREATE workday
const createWorkDay = async (req, res) => {
  try {
    // Validate inputs
    if (!req.body.name) {
      return res.status(400).json({ error: 'WORK DAY name required' });
    }
    // Create new workday object
    const workday = new WorkDay({
      name: req.body.name
    });
    // Save workday to database
    await workday.save();
    // Return success response with new workday object
    res.status(201).json({
      message: 'Workday created successfully',
      workday: workday.toJSON(),
    });
  } catch (err) {
    // Handle errors
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};
/*
const createWorkDay = async (req, res) => {
    const workday = new WorkDay ({
        name: req.body.name,
        partsUsed: req.body.partsUsed,
    })
    await workday.save()
    res.send(workday);
};
*/

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

// ADD  a single part to a workDay 
const addSinglePartToWorkDay = async(req, res) => {
    try {
        const barCodeId = await Part.findOne({ barCodeId: part.barCodeId }) 

        if(!barCodeId) {
            return res.status(404).send({ error: 'a part with that barCodeId was not found' })
        }
        //gets parts objectId 
        part.id = req.body._id

        //  to add part to used part arr
        workday.partsUsed = arr.push(part.id);

        await WorkDay.findOneAndUpdate({ _id: workday._id }, workday.partsUsed, {new: true})
        
        res.send(workday);
    } catch (err) {
        res.status(500).send({ error: err.message })
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
    getWorkDayByDate,
    getWorkDayById,
    createWorkDay,
    deleteWorkDay,
    updateWorkDay,
    addSinglePartToWorkDay
};

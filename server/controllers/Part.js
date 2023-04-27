const mongoose = require('mongoose');
const Part = require('../models/Part.js');


// GET all parts
const getParts = async (req, res) => {
    try {
    const parts = await Part.find();
    res.send(parts);
    } catch(err) {
        console.log('########');
        console.log( err.message)
        res.status(500).send({ error: err.message })
    }
};

//GET a single part by id
const getPartById = async (req, res) => {
    try{
        const part = await Part.findOne({ _id:req.params.id})
        res.send(part);
    } catch {
        res.status(404);
        res.send({ error: 'Part doesnt exist!'});
        res.status(500).send({ error: err.message })
    }
};

// CREATE part
const createPart = async(req, res) => {
    try {
    const part = new Part ({
        name: req.body.name,
        size: req.body.size,
        boxQuantity: req.body.boxQuantity,
        currentStock: req.body.currentStock,
        initialStock: req.body.initialStock,
        barCodeId: req.body.barCodeId,
    })
    await part.save()
    res.send(part);
    } catch(err) {
        console.log('########');
        console.log( err.message)
        res.status(500).send({ error: err.message })
    }
};

// DELETE a part
const deletePart = async(req, res) => {
    try{
        await Part.deleteOne({ _id: req.params.id})
        res.status(204).send()
    }catch{
        res.status(404)
        console.log('ERROR DELETEING PART')
        res.send({ error: 'Part did not exist' })
    }
};

// UPDATE a part
const updatePart = async(req, res) => {
    try {
        const part = await Part.findOne({ _id: req.params.id })

        if (!part) {
            return res.status(404).send({ error: 'Part not found' })
        }

        part.name = req.body.name
        part.size = req.body.size
        part.currentStock = req.body.currentStock
        part.barCodeId = req.body.barCodeId
        //await Part.findOneAndUpdate({ _id: req.params.id }, part, { new: true })
        await part.save();
        res.send(part)
    } catch (err) {
        console.log('########');
        console.log( err.message)
        res.status(500).send({ error: err.message })
    }
};

module.exports = {
    getParts,
    getPartById,
    createPart,
    deletePart,
    updatePart
};

const mongoose = require('mongoose');
const Part = require('../models/Part.js');


// get all parts
const getParts = async (req, res) => {
    const parts = await Part.find();
    res.send(parts);
};

//get a single part by id
const getPartById = async (req, res) => {
    try{
        const part = await Part.findOne({ _id:req.params.id})
        res.send(part);
    } catch {
        res.status(404);
        res.send({ error: 'Part doesnt exist!'});
    }
};

// create part
const createPart = async(req, res) => {
    const part = new Part ({
        name: req.body.name,
        size: req.body.size,
        quantity: req.body.quantity,
        partNumber: req.body.partNumber,
    })
    await part.save()
    res.send(part);
};



module.exports = {
    getParts,
    getPartById,
    createPart
};


/* 


    // delete a part
const deletePart = async(req, res) => {
};

    // update a part
    const updatePart = async(req, res) => {
};
*/

    /*
    getPart,
    createPart,
    deletePart,
    updatePart
    */


const mongoose = require('mongoose');
const Part = require('../models/Part.js');


// get all parts
const getParts = async (req, res) => {
    const parts = await Part.find();
    res.send(parts);
};

//get a single part by id
const getPartById = async (req, res) => {
    const part = await Part.findOne({ _id:req.params.id})
    res.send(part);
};

module.exports = {
    getParts,
    getPartById
};


/* 

// create part
const createPart = async(req, res) => {
};

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


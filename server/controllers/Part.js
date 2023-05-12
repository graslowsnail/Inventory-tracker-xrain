const mongoose = require('mongoose');
const Part = require('../models/Part.js');
const PartHistory = require('../models/PartHistory.js');


// GET all parts
const getParts = async (req, res) => {
    try {
    const parts = await Part.find();
    res.send(parts);
    } catch(err) {
        console.log('########YERRR');
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
        res.send({ error: 'Part doesnt exist! GETPARTBYID'});
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
        console.log('######## CREATE PART');
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
            return res.status(404).send({ error: 'Part not found UPDATEPART' })
        }

        part.name = req.body.name
        part.size = req.body.size
        part.currentStock = req.body.currentStock
        part.barCodeId = req.body.barCodeId
        //await Part.findOneAndUpdate({ _id: req.params.id }, part, { new: true })
        await part.save();
        res.send(part)
    } catch (err) {
        console.log('######## UPDATE PART');
        console.log( err.message)
        res.status(500).send({ error: err.message })
    }
};

// UPDATED ALL PARTS CURRENTSTOCK WITH INITIALSTOCK VALUE
const resetAllPartsCurrentStock = async (req, res) => {
    try {
    const partsList = await Part.find();
        partsList.forEach(async (part) => {
          part.currentStock = part.initialStock;
          await part.save();
        });
        res.status(204).send()
    console.log('Current stock updated successfully!');

  } catch (error) {
    console.error(error);
      console.log('###### RESETALLPARTSCURRENTSTOCK');
  }
};

// adds parts data into new partHistory schema 
// this works in conjunction with the setPartHistoryHandler in frontend
const addPartDataIntoPartHistory = async (req, res) => {
  try {
    const parts = await Part.find({});

        for (const part of parts) {
          let partHistory = await PartHistory.findOne({ name: part.name });

          if (partHistory) {
            // If a PartHistory document already exists drop the collection and remake it 
              PartHistory.collection.drop();
          } 
            // If a PartHistory document doesn't exist yet, create a new one
            partHistory = new PartHistory({
              name: part.name,
                size: part.size,
              currentStock: part.currentStock,
              initialStock: part.initialStock,
              usedStockAmmount: part.initialStock - part.currentStock,
                boxQuantity: part.boxQuantity
              // copy any other properties you want to include in the PartHistory schema
            });

            // If the usedStockAmmount is zero, update it to prevent saving unnecessary document
            if (part.initialStock === part.currentStock) {
                partHistory.isUsed = false;
            } else {
                partHistory.isUsed = true
            }

            console.log(partHistory);
          await partHistory.save();
        }

    res.json({ message: 'Parts copied to PartHistory successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
};


module.exports = {
    getParts,
    getPartById,
    createPart,
    deletePart,
    updatePart,
    resetAllPartsCurrentStock,
    addPartDataIntoPartHistory
};

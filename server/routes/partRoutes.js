const express = require('express');
const router = express.Router();
const Part = require('../models/Part.js');

const auth = require('../middleware/auth');

const {
    getParts,
    getPartById,
    createPart,
    deletePart,
    updatePart,
    resetAllPartsCurrentStock,
    addPartDataIntoPartHistory
} = require('../controllers/Part.js');

// GET all parts
router.get('/parts', auth, getParts)

// GET part by Id
router.get('/parts/:id', auth, getPartById)

// CREATE Part
router.post('/parts', auth, createPart)

// DELETE Part
router.delete('/parts/:id', auth, deletePart)

// UPDATE Part
router.put('/parts/:id', auth, updatePart)

// RESET PARTS CURRENTSTOCK
//router.get('/parts/reset', resetAllPartsCurrentStock);
router.post ('/parts/copy-to-part-history', auth, addPartDataIntoPartHistory)

router.post('/parts/reset', auth, resetAllPartsCurrentStock);

module.exports = router;

const express = require('express');
const router = express.Router();

const { 
    getRecognizedClubs, 
    getClubByName, 
    createClub, 
    updateClub, 
    deleteClub 
} = require('../controllers/RecognizedController');

// Rutas
router.get('/', getRecognizedClubs);
router.get('/:nombre', getClubByName);
router.post('/', createClub);
router.put('/:id', updateClub);
router.delete('/:id', deleteClub);

module.exports = router;

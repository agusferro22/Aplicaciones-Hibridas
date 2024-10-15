const express = require('express');
const router = express.Router();
router.use(express.json());

const { 
    getAllTeams, 
    getTeamByName, 
    getTeamsByYear,  
    getTeamsByOrigin, 
    getTeamById, 
    createTeam, 
    updateTeam, 
    deleteTeam 
} = require('../controllers/ExperimentalController');

// Rutas
router.get('/', getAllTeams);
router.get('/name/:equipo', getTeamByName);
router.get('/year/:año', getTeamsByYear);
router.get('/origin/:origen', getTeamsByOrigin);
router.get('/:id', getTeamById);
router.post('/', createTeam);
router.put('/:id', updateTeam);
router.delete('/:id', deleteTeam);

module.exports = router;

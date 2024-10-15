const chalk = require('chalk');
const log = console.log;

const Experimental = require('../Models/ExperimentalModel');

// Traer todos los equipos
const getAllTeams = async (req, res) => {
    try {
        const teams = await Experimental.find();
        if (teams.length === 0) {
            return res.status(404).json({ msg: "No existen equipos." });
        }
        res.status(200).json({ msg: "Equipos: ", data: teams });
    } catch (error) {
        log(chalk.bgRed('[ExperimentalController.js]: getAllTeams: ', error));
        res.status(500).json({ msg: 'OOPS, tenemos un error', data: {} });
    }
};

// Traer un equipo por nombre
const getTeamByName = async (req, res) => {
    const { equipo } = req.params;
    try {
        const team = await Experimental.findOne({ equipo });
        if (team) {
            res.status(200).json({ msg: "¡Equipo encontrado!", data: team });
        } else {
            res.status(404).json({ msg: "No se encontró el equipo.", data: {} });
        }
    } catch (error) {
        log(chalk.bgRed('[ExperimentalController.js]: getTeamByName: ', error));
        res.status(500).json({ msg: 'OOPS, tenemos un error', data: {} });
    }
};

// Traer equipos por año
const getTeamsByYear = async (req, res) => {
    const { año } = req.params;
    try {
        const teams = await Experimental.find({ año });
        if (teams.length !== 0) {
            res.status(200).json({ msg: "¡Equipos encontrados!", data: teams });
        } else {
            res.status(404).json({ msg: "No se encontraron equipos para ese año.", data: {} });
        }
    } catch (error) {
        log(chalk.bgRed('[ExperimentalController.js]: getTeamsByYear: ', error));
        res.status(500).json({ msg: 'OOPS, tenemos un error', data: {} });
    }
};

// Traer equipos por origen
const getTeamsByOrigin = async (req, res) => {
    const { origen } = req.params;
    try {
        const teams = await Experimental.find({ origen });
        if (teams.length !== 0) {
            res.status(200).json({ msg: "¡Equipos encontrados!", data: teams });
        } else {
            res.status(404).json({ msg: "No se encontraron equipos con ese origen.", data: {} });
        }
    } catch (error) {
        log(chalk.bgRed('[ExperimentalController.js]: getTeamsByOrigin: ', error));
        res.status(500).json({ msg: 'OOPS, tenemos un error', data: {} });
    }
};

// Traer un equipo por ID
const getTeamById = async (req, res) => {
    const { id } = req.params;
    try {
        const team = await Experimental.findById(id);
        if (team) {
            res.status(200).json({ msg: "¡Equipo encontrado!", data: team });
        } else {
            res.status(404).json({ msg: "No se encontró el equipo.", data: {} });
        }
    } catch (error) {
        log(chalk.bgRed('[ExperimentalController.js]: getTeamById: ', error));
        res.status(500).json({ msg: 'OOPS, tenemos un error', data: {} });
    }
};

// Añadir un nuevo equipo
const createTeam = async (req, res) => {
    const { equipo, origen, año, diseño } = req.body;
    if (!equipo || !origen || !año || !diseño) {
        return res.status(400).json({ msg: 'Faltan datos obligatorios.', data: { equipo, origen, año, diseño } });
    }

    try {
        const teamExist = await Experimental.exists({ equipo });
        if (teamExist) {
            return res.status(400).send({ msg: "El equipo ya existe." });
        }

        const newTeam = new Experimental({ equipo, origen, año, diseño });
        await newTeam.save();
        res.status(201).json({ msg: "Equipo creado.", data: newTeam });
    } catch (error) {
        log(chalk.bgRed('[ExperimentalController.js]: createTeam: ', error));
        res.status(500).json({ msg: 'OOPS, tenemos un error', data: {} });
    }
};

// Actualizar un equipo
const updateTeam = async (req, res) => {
    const { id } = req.params;
    const { equipo, origen, año, diseño } = req.body;

    try {
        const updatedTeam = await Experimental.findByIdAndUpdate(id, { equipo, origen, año, diseño }, { new: true });
        if (updatedTeam) {
            res.status(200).json({ msg: "El equipo fue actualizado exitosamente.", data: updatedTeam });
        } else {
            res.status(404).json({ msg: "No se encontró el equipo.", data: {} });
        }
    } catch (error) {
        log(chalk.bgRed('[ExperimentalController.js]: updateTeam: ', error));
        res.status(500).json({ msg: 'OOPS, tenemos un error', data: {} });
    }
};

// Eliminar un equipo
const deleteTeam = async (req, res) => {
    const { id } = req.params;
    try {
        const team = await Experimental.findByIdAndDelete(id);
        if (team) {
            res.status(200).json({ msg: "El equipo fue eliminado exitosamente.", data: team });
        } else {
            res.status(404).json({ msg: "No se encontró el equipo.", data: {} });
        }
    } catch (error) {
        log(chalk.bgRed('[ExperimentalController.js]: deleteTeam: ', error));
        res.status(500).json({ msg: 'OOPS, tenemos un error.', data: {} });
    }
};

module.exports = {
    getAllTeams,
    getTeamByName,
    getTeamsByYear,
    getTeamsByOrigin,
    getTeamById,
    createTeam,
    updateTeam,
    deleteTeam
};

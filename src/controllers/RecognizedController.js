const chalk = require('chalk'); // Solo una declaración
const log = console.log;

const Recognized = require('../Models/RecognizedModel');

console.log(chalk.green('Este texto es verde'));

// Traer todos los clubes reconocidos
const getRecognizedClubs = async (req, res) => {
    try {
        const clubs = await Recognized.find();
        if (clubs.length === 0) {
            return res.status(404).json({ msg: "No existen clubes reconocidos." });
        }
        res.status(200).json({ msg: "Clubes reconocidos:", data: clubs });
    } catch (error) {
        log(chalk.bgRed('[RecognizedController.js]: getRecognizedClubs: ', error));
        res.status(500).json({ msg: 'OOPS, tenemos un error', data: {} });
    }
};

// Traer un club por nombre
const getClubByName = async (req, res) => {
    const { nombre } = req.params;

    try {
        const club = await Recognized.findOne({ nombre });
        if (club) {
            res.status(200).json({ msg: "¡Club encontrado!", data: club });
        } else {
            res.status(404).json({ msg: "No se encontró el club.", data: {} });
        }
    } catch (error) {
        log(chalk.bgRed('[RecognizedController.js]: getClubByName: ', error));
        res.status(500).json({ msg: 'OOPS, tenemos un error', data: {} });
    }
};

// Crear un nuevo club
const createClub = async (req, res) => {
    const { nombre, origen, fundación, colores_posibles } = req.body;

    if (!nombre || !origen || !fundación || !colores_posibles) {
        return res.status(400).json({ msg: 'Faltan datos obligatorios.', data: { nombre, origen, fundación, colores_posibles } });
    }

    try {
        const newClub = new Recognized({ nombre, origen, fundación, colores_posibles });
        await newClub.save();
        res.status(201).json({ msg: "Club creado.", data: newClub });
    } catch (error) {
        log(chalk.bgRed('[RecognizedController.js]: createClub: ', error));
        res.status(500).json({ msg: 'OOPS, tenemos un error', data: {} });
    }
};

// Actualizar un club
const updateClub = async (req, res) => {
    const { id } = req.params;
    const { nombre, origen, fundación, colores_posibles } = req.body;

    try {
        const updatedClub = await Recognized.findByIdAndUpdate(id, { nombre, origen, fundación, colores_posibles }, { new: true });
        if (updatedClub) {
            res.status(200).json({ msg: "Club actualizado exitosamente.", data: updatedClub });
        } else {
            res.status(404).json({ msg: "No se encontró el club.", data: {} });
        }
    } catch (error) {
        log(chalk.bgRed('[RecognizedController.js]: updateClub: ', error));
        res.status(500).json({ msg: 'OOPS, tenemos un error', data: {} });
    }
};

// Eliminar un club
const deleteClub = async (req, res) => {
    const { id } = req.params;

    try {
        const club = await Recognized.findByIdAndDelete(id);
        if (club) {
            res.status(200).json({ msg: "Club eliminado exitosamente.", data: club });
        } else {
            res.status(404).json({ msg: "No se encontró el club.", data: {} });
        }
    } catch (error) {
        log(chalk.bgRed('[RecognizedController.js]: deleteClub: ', error));
        res.status(500).json({ msg: 'OOPS, tenemos un error.', data: {} });
    }
};

module.exports = {
    getRecognizedClubs,
    getClubByName,
    createClub,
    updateClub,
    deleteClub
};

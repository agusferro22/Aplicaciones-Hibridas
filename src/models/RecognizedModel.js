const mongoose = require('mongoose');
const schema = mongoose.Schema;

const equipoSchema = new schema({
    nombre: {
        type: String,
        required: true
    },
    origen: {
        type: String,
        required: true
    },
    fundación: {
        type: Number,
        required: true
    },
    colores_posibles: {
        type: [String],  // Array de strings
        required: true
    },
    creado_en: {
        type: Date,
        default: Date.now
    },
});

const Equipo = mongoose.model('Equipo', equipoSchema);

module.exports = Equipo;

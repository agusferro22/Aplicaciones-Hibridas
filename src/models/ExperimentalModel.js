const mongoose = require('mongoose');
const schema = mongoose.Schema;

const equipoExperimentalSchema = new schema({
    equipo: {
        type: String,
        required: true
    },
    origen: {
        type: String,
        required: true
    },
    año: {
        type: Number,
        required: true
    },
    diseño: {
        type: String,
        required: true
    },
    creado_en: {
        type: Date,
        default: Date.now
    },
});

const EquipoExperimental = mongoose.model('EquipoExperimental', equipoExperimentalSchema);

module.exports = EquipoExperimental;

const mongoose = require('mongoose');

const ConsumoSchema = mongoose.Schema({

    fecha: {
        type: Date,
        require: true
    },
    hora: {
        type: Number,
        require: true
    },
    consumo: {
        type: Number,
        require: true
    },
    precioKwh: {
        type: Number,
        require: true
    },
    costeHora: {
        type: Number,
        require: true
    }


});

module.exports = mongoose.model('Consumo', ConsumoSchema)
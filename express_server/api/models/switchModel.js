'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PortSchema = new Schema({
    porta: {
        type: Number,
        required: true
    },
    estado: {
        type: String,
        required: true
    }
})

const SwitchSchema = new Schema({
    nome: {
        type: String,
        required: true
    },
    portas: [ PortSchema ]
})

module.exports = mongoose.model('Port', PortSchema);
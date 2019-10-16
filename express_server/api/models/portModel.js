'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PortSchema = new Schema({
    estado: {
        type: String,
        required: true
    },
    nome: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Port', PortSchema);
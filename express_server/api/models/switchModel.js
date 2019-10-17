'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SwitchSchema = new Schema({
    timestamp: {
        type: Date,
        required: true
    },
    nome: {
        type: String,
        required: true
    },
    porta01: {
        type: String,
        required: true
    },
    porta02: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Switch', SwitchSchema);
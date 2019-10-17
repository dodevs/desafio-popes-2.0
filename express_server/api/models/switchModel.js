'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SwitchSchema = new Schema({
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

SwitchSchema.set('timestamps', true);

module.exports = mongoose.model('Switch', SwitchSchema);
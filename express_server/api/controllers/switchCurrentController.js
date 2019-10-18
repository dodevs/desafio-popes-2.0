'use strict'

const mongoose = require('mongoose');
const Swit = mongoose.model('Switch');

const snmpget = require('../../utils/snmp-get');

exports.switchGet = function (req, res) {
    snmpget.get()
        .then(value => {                 
            res.json(value)
        })
        .catch(reason => {
            res.send('error')
        })
};

exports.switchGetBy = function(req, res) {
    snmpget.get()
        .then(value => {
            res.json(value[req.params.attr])
        })
        .catch(reason => {
            res.error('error')
        })
}
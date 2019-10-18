'use strict'

const mongoose = require('mongoose');
const Swit = mongoose.model('Switch');

exports.switchGetAll = function (req, res) {
    Swit.find({}, function(error, swit) {
        if(error)
            res.send('error')
        res.json(swit);
    })
}

exports.switchCreate = function (req, res) {
    let newSwit = new Swit(req.body);
    newSwit.save(function (err, swit) {
        if (err)
            res.send(err);
        res.json(swit);
    })
}

exports.switchUpdate = function (req, res) {
    Swit.findByIdAndUpdate(req.params._id, req.body, function (err, swit) {
        if (err)
            res.send(err);
        res.json(swit);
    })
}

exports.switchDelete = function (req, res) {
    Swit.findByIdAndDelete(req.params._id, function (err, swit) {
        if (err)
            res.send(err);
        res.json(swit._id);
    })
}

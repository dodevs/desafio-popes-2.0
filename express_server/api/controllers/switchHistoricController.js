'use strict'

const mongoose = require('mongoose');
const Swit = mongoose.model('Switch');

exports.switchGetAll = function (req, res) {
    Swit.find({}, function (err, result) {
        if (err)
            res.send(err)
        res.json(result);
    })
}

exports.switchCreate = function (req, res) {
    let newSwit = new Swit(req.body);
    newSwit.save(function (err, result) {
        if (err)
            res.send(err);
        res.json(result);
    })
}

exports.switchUpdate = function (req, res) {
    Swit.findByIdAndUpdate(req.params.id, req.body, function (err, result) {
        if (err)
            res.send(err);
        res.json(result);
    })
}

exports.switchDelete = function (req, res) {
    Swit.findByIdAndDelete(req.params.id, function (err, result) {
        if (err)
            res.send(err);
        res.json(result._id);
    })
}

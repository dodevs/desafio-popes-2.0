'use strict'

const mongoose = require('mongoose');
const Swit = mongoose.model('Switch');

exports.switchList = function (req, res) {
    Swit.find({}, function (err, swit) {
        if (err)
            res.send(err);
        res.json(swit);
    });
};

exports.switchCreate = function (req, res) {
    let newSwit = new Swit(req.body);
    newSwit.save(function (err, swit) {
        if (err)
            res.send(err);
        res.json(swit);
    })
}

exports.switchUpdate = function (req, res) {
    Swit.findByIdAndUpdate(req.body._id, req.body, function (err, swit) {
        if (err)
            res.send(err);
        res.json(swit);
    })
}

exports.switchDelete = function (req, res) {
    Swit.findByIdAndDelete(req.body._id, function (err, swit) {
        if (err)
            res.send(err);
        res.json(swit._id);
    })
}

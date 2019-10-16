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

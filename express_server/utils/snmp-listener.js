const cron = require("node-cron");
const crontime = require('../constants').crontime;
const snmpget = require('./snmp-get');

// Mongo 
const mongoose = require("mongoose");
const Swit = mongoose.model("Switch");

// socket
const socketio = require('socket.io');

module.exports = function (server) {
    const io = socketio(server);

    cron.schedule(crontime, () => {
        const switReceived = snmpget.get();
        switReceived
            .then(value => {
                const newSwitch = new Swit(value);
                newSwitch.save((err, swit) => {
                    io.emit("switchCurrent", swit);
                })
            })
            .catch(reason => {
                io.emit("switchCurrent", "Error");
            })
    })
}

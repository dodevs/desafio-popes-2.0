const cron = require("node-cron");
const snmpget = require('./snmp-get');

// Mongo 
const mongoose = require("mongoose");
const Swit = mongoose.model("Switch");

module.exports = function(server) {
    const io = require('socket.io')(server);

    cron.schedule("*/1 * * * *", () => {
        const newSwitch = new Swit(snmpget.get());
        newSwitch.save((err, swit) => {
            io.emit("switchCurrent", swit);
        })
    })
}

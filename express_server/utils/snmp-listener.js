const cron = require("node-cron");
const snmpget = require('./snmp-get');

// Mongo 
const mongoose = require("mongoose");
const Swit = mongoose.model("Switch");

// socket
const socketio = require('socket.io');

module.exports = function (server) {
    const io = socketio(server);

    cron.schedule("*/1 * * * *", () => {
        const switReceived = snmpget.get();
	console.log('quase');
        switReceived
            .then(value => {
		console.log(value);
                const newSwitch = new Swit(value);
                newSwitch.save((err, swit) => {
                    io.emit("switchCurrent", swit);
                })
            })
            .catch(reason => {
		console.log("errrrorrr");
                io.emit("switchCurrent", "Error");
            })
    })
}

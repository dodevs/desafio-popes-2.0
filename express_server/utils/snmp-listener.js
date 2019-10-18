const cron = require("node-cron");
const snmpget = require('./snmp-get');

// Mongo 
const mongoose = require("mongoose");
const Swit = mongoose.model("Switch");

// socket
const socketio = require('socket.io');

module.exports = function(server) {
    const io = socketio(server);

    cron.schedule("*/10 * * * * *", () => {
	const switReceived = snmpget.get();
	console.log(switReceived);
        const newSwitch = new Swit(switReceived);
        newSwitch.save((err, swit) => {	    
            io.emit("switchCurrent", swit);
        })
    })
}

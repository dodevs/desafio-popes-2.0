const cron = require("node-cron");
const snmp = require("snmp-native");
const mongoose = require("mongoose");
const Swit = mongoose.model("Switch");

const nomeOid = [1, 3, 6, 1, 2, 1, 1, 1, 0];
const porta01Oid = [1, 3, 6, 1, 2, 1, 2, 2, 1, 8, 1001];
const porta02Oid = [1, 3, 6, 1, 2, 1, 2, 2, 1, 8, 1002];

var oidsDict;
oidsDict[nomeOid] = "nome";
oidsDict[porta01Oid] = "porta01";
oidsDict[porta02Oid] = "porta02";


var session = new snmp.Session({
    host: '200.137.87.181',
    port: 161,
    community: 'd3s4f10'
})

function startCron() {
    cron.schedule("*/1 * * * *", () => {
        session.getAll({ oids: [nomeOid, porta01Oid, porta02Oid] }, function (error, varbinds) {
            let switV;
            varbinds.forEach(function (vb) {
                switV[oidsDict[vb.oid]] = vb.value;
            })

            let newSwitch = new Swit(switV);

            newSwitch.save();
        })
    })
}

module.exports.start = startCron;

const cron = require("node-cron");

const mongoose = require("mongoose");
const Swit = mongoose.model("Switch");

var oids = [
    [1, 3, 6, 1, 2, 1, 1, 1, 0],
    [1, 3, 6, 1, 2, 1, 2, 2, 1, 8, 1001],
    [1, 3, 6, 1, 2, 1, 2, 2, 1, 8, 1002]
];

var oidsDict = {
    [1, 3, 6, 1, 2, 1, 1, 1, 0]: "nome",
    [1, 3, 6, 1, 2, 1, 2, 2, 1, 8, 1001]: "porta01",
    [1, 3, 6, 1, 2, 1, 2, 2, 1, 8, 1002]: "porta02"
};

module.exports = cron.schedule("*/1 * * * *", () => {
    session.getAll({ oids: oids }, function (error, varbinds) {
        let switV = {};
        varbinds.forEach(function (vb) {
            switV[oidsDict[vb.oid]] = vb.value;
        })

        let newSwitch = new Swit(switV);

        newSwitch.save();
    })
})
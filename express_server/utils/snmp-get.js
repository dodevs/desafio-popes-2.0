const snmp = require("snmp-native");

const nomeOid = [1, 3, 6, 1, 2, 1, 1, 1, 0];
const porta01Oid = [1, 3, 6, 1, 2, 1, 2, 2, 1, 8, 1001];
const porta02Oid = [1, 3, 6, 1, 2, 1, 2, 2, 1, 8, 1002];

var session = new snmp.Session({
    host: '200.137.87.181',
    port: 161,
    community: 'd3s4f10'
})

module.exports.get = function() {
    return new Promise(
        function(resolve, reject) {
            session.getAll({ oids: [nomeOid, porta01Oid, porta02Oid] }, function (error, varbinds) {
                if(error)
                    reject(error);
                
                let switV = {};
                varbinds.forEach(function (vb) {
                    switch (vb.oid) {
                        case nomeOid:
                            switV['nome'] = vb.value;
                            break;
                        case porta01Oid:
                            switV['porta01'] = vb.value == 1 ? 'Up' : 'Down';
                            break;
                        case porta02Oid:
                            switV['porta02'] = vb.value == 1 ? 'Up' : 'Down';
                            break;
                        default:
                            break;
                    }
                })  
                
                resolve(switV);
            })
        }
    )
}


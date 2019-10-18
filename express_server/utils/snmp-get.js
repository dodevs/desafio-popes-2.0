const snmp = require("snmp-native");

var session = new snmp.Session({
    host: '200.137.87.181',
    port: 161,
    community: 'd3s4f10'
})

module.exports.get = function() {
    return new Promise(
        function(resolve, reject) {
            session.getAll({ oids: [[1, 3, 6, 1, 2, 1, 1, 1, 0], [1, 3, 6, 1, 2, 1, 2, 2, 1, 8, 1001], [1, 3, 6, 1, 2, 1, 2, 2, 1, 8, 1002]] }, function (error, varbinds) {
                if(error)
                    reject(error);                
                
		let switV = {}

                varbinds.forEach(function (vb) {
		    
                    switch (vb.oid) {
                        case [1, 3, 6, 1, 2, 1, 1, 1, 0]:
                            switV['nome'] = vb.value;
                            break;
                        case [1, 3, 6, 1, 2, 1, 2, 2, 1, 8, 1001]:
                            switV['porta01'] = vb.value == 1 ? 'Up' : 'Down';
                            break;
                        case [1, 3, 6, 1, 2, 1, 2, 2, 1, 8, 1002]:
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


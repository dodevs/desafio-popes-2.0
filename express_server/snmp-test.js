var snmp = require('snmp-native');

var session = new snmp.Session({
    host: '200.137.87.181',
    port: 161,
    comunity: 'd3s4f10'
})

session.get({
    oid: [1, 3, 6, 1, 2, 1, 1, 1, 0], function(error, varbinds) {
        if (error)
            console.log('Fail');
        else
            console.log(varbinds[0].oid + ' = ' + varbinds[0].value + ' (' + varbinds[0].type + ')');
    }
})
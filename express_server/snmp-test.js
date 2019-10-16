var snmp = require('snmp-native');

var session = new snmp.Session({
    host: '200.137.87.181',
    port: 161,
    community: 'd3s4f10'
})

// nome switch
session.get({oid: [1, 3, 6, 1, 2, 1, 1, 1, 0]}, function(error, varbinds) {
        if (error)
            console.log('Fail');
        else
            console.log(`nome: ${varbinds[0].value}`);
    }
);


//porta 01 set
/*session.set({oid: [1,3,6,1,2,1,2,2,1,8,1001], value: 2, type: 2}, function(error, varbinds) {
	if(error)
		console.log('Fail');
	else
		console.log('Foi setado');
});*/

//porta 01 get
session.get({oid: [1,3,6,1,2,1,2,2,1,8,1001]}, function(error, varbinds) {
	if(error)
		console.log('Fail');
	else
		console.log(`Porta 01: (${varbinds[0].value}) ${varbinds[0].value == 1 ? 'ligada' : 'desligada'} (${varbinds[0].type})`);
});

//porta 02
session.getNext({oid: [1,3,6,1,2,1,2,2,1,8,1002]}, function(error, varbinds) {
	if(error)
		console.log('Fail');
	else
		console.log(`Porta 02: (${varbinds[0].value}) ${varbinds[0].value == 1 ? 'ligada' : 'desligada'} (${varbinds[0].type})`);
});

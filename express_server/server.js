const app = require('express')(), port = 5000;
const bodyParser = require('body-parser');

const mongoose = require('mongoose');
require('./api/models/switchModel');

// Executa chamada snmp de tempo em tempo, grava no banco de dados e emite por socket
const snmplistener = require('./utils/snmp-listener');

// cria conexao com o mongo
mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true });

// Executa apos a conexao com o mongo
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', () => {

    app.use(bodyParser.json());

    const routes = require('./api/routes/switchRouter');
    routes(app);

    const server = app.listen(port);

    snmplistener(server);
})

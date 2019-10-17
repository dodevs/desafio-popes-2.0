const app = require('express')(), port = 5000;

const mongoose = require('mongoose');
require('./api/models/switchModel');
const snmpcron = require('./snmp-cron');

const bodyParser = require('body-parser');

// cria conexao com o mongo
mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true });

// Executa apos a conexao com o mongo
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', () => {
    snmpcron.start(); // Alimenta o banco de dados a cada 1 minuto

    app.use(bodyParser.json());

    const routes = require('./api/routes/switchRouter');
    routes(app);

    app.listen(port);
})

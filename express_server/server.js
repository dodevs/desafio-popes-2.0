const app = require('express')(), port = 5000;

const mongoose = require('mongoose');
require('./api/models/swichModel');

const bodyParser = require('body-parser');

// cria conexao com o mongo
mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true });

// Executa apos a conexao com o mongo
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', () => {
    app.use(bodyParser.json());

    app.listen(port);
})
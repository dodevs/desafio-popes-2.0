'use strict'

module.exports = function (app) {
    const switchController = require('../controllers/switchtController');

    app.route('/')
        .get(switchController.switchList);
}
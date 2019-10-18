'use strict'

module.exports = function (app) {
    const switchController = require('../controllers/switchtController');

    app.route('/')
        .get(switchController.switchList)
        .post(switchController.switchCreate)
        .put(switchController.switchUpdate)
        .delete(switchController.switchDelete);
}
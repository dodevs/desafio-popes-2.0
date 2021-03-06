'use strict'

module.exports = function (app) {
    const switchCurrentController = require('../controllers/switchCurrentController');
    const switchHistoricController = require('../controllers/switchHistoricController');

    app.route('/')
        .get(switchCurrentController.switchGet);

    app.route('/historic')
        .get(switchHistoricController.switchGetAll)
        .post(switchHistoricController.switchCreate)

    app.route('/historic/:id')
        .put(switchHistoricController.switchUpdate)
        .delete(switchHistoricController.switchDelete);

    app.route('/:attr')
        .get(switchCurrentController.switchGetBy);
}
const express = require('express');

const UsersController = require('./controllers/UsersController');
const TimesController = require('./controllers/TimesController');
const routes = express.Router();

routes.get('/users', UsersController.index);
routes.post('/users', UsersController.create);


routes.get('/times', TimesController.index);
routes.post('/times', TimesController.create);

module.exports = routes;
const express = require('express');
const UsersController = require('./controllers/UsersController');
const TimesController = require('./controllers/TimesController');

const routes = express.Router();

//Usuários
routes.get('/list', UsersController.index);
routes.post('/create', UsersController.create);

//Times
routes.get('/times', TimesController.index);
routes.post('/times', TimesController.create);

module.exports = routes;
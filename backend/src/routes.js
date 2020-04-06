const express = require('express');
const UsersController = require('./controllers/UsersController');
const TimesController = require('./controllers/TimesController');

const routes = express.Router();

//Usuários
routes.get('/list', UsersController.index);
routes.post('/create', UsersController.create);
routes.delete('/delete/:id', UsersController.delete);

//Times
routes.get('/times', TimesController.index);
routes.post('/times', TimesController.create);
routes.put('/times/:id', TimesController.update);
routes.delete('/times/:id', TimesController.delete);

module.exports = routes;
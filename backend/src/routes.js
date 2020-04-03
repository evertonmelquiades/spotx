const express = require('express');

const routes = express.Router();

routes.post('/users', (require, response) => {
    const body = request.body;



    return response.json({ 
        evento: 'Project',
        aluno: 'Spot-X'
     });
});

module.exports = routes;
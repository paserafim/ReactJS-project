const express = require('express');
const routes = express.Router();

routes.post('/user', (request, response) => {
    const params = request.body;      // para do corpo do request
    // const params = request.params;      // para parametros /:id
    //const params = request.query;    // para buscar variaveis da query

    console.log(params);

    return response.json({
        evento: 'myApp',
        aluno: 'Paulo Alexandre Serafim'
    });
});

module.exports = routes;
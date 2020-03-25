const express = require('express');

const app = express();

/**
 * Rota / Recurso
 */

/**
 * Métodos HTTP:
 * 
 * GET: Buscar uma informação do backend
 */

app.get('/', (request, response) => {
    // return response.send('Olá World!');
    return response.json({
        evento: 'myApp',
        aluno: 'Paulo Serafim'
    });
});

app.listen(3333);
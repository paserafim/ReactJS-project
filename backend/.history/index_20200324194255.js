const express = require('express');

const app = express();

/**
 * Rota / Recurso
 */

/**
 * Métodos HTTP:
 * GET: Buscar/Listar uma informação do backend
 * POST: Criar um informação no backend
 * PUT: Alterar uma informação no backend
 * DELETE: Eliminar uma informação no backend
 */

/**
 * Tipos de parâmetros:
 * - Query: parâmetros nomeados enviados na rota após (user?var=valor&var2=valor2)
 * geralmente usados para filtros, paginação, listagens.
 * - RouteParams: Parâmetros utilizados para identificar recursos. (ex: user/:id)
 * - RequestBody: Parâmetros
 */


app.get('/user?nome=paulo', (request, response) => {
    // return response.send('Olá World!');
    const 
    return response.json({
        evento: 'myApp',
        aluno: 'Paulo Serafim'
    });
});

app.listen(3333);
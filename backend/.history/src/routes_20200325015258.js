const express = require('express');
const crypto = require('crypto');
const connection = require('./database/conexao');

const routes = express.Router();



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
 * - RequestBody: Parâmetros enviados no corpo da requisição. usado para criar ou alterar recursos.
 */

/**
 * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft Sql Server
 * NoSQL: MongoDB, CouchDB, etc.
 */

/**
 * Driver: Querys SQL
 *
 * Query Builder: table('users').select('*).where() ...
 * */

routes.post('/ongs', async (request, response) => {
    const { name, email, whatsapp, city, uf } = request.body;      // para do corpo do request
    // const params = request.params;      // para parametros /:id
    //const params = request.query;    // para buscar variaveis da query

    //Criar o ID
    const id = crypto.randomBytes(4).toString('HEX');

    //Conexao a BD
    await connection('ongs').insert({
        id, name, email, whatsapp, city, uf
    })

    return response.json({ id });
});

module.exports = routes;
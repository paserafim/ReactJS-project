const express = require('express');
const crypto = require('crypto');

const connection = require('./database/conexao');

const routes = express.Router();

/**
 * Rota / Recurso
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
 * Query Builder: table('users').select('*).where() ...
 * */

routes.get('/ongs', async (request, response) => {
    const ongs = await connection('ongs').select('*');

    return 
});

routes.post('/ongs', async (request, response) => {
    // para do corpo do request
    const { name, email, whatsapp, city, uf } = request.body;
    // const params = request.params;      // para parametros /:id
    //const params = request.query;    // para buscar variaveis da query

    //Criar o ID encriptado
    const id = crypto.randomBytes(4).toString('HEX');

    //Conexao a BD e inserir registo
    await connection('ongs').insert({
        id, name, email, whatsapp, city, uf
    })

    return response.json({ id });
});

module.exports = routes;
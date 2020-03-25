const express = require('express');
const Ongcontroller = require('./controllers/OngController');
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

routes.get('/ongs',Ongcontroller.index);
routes.post('/ongs', async (request, response) => {

});

module.exports = routes;
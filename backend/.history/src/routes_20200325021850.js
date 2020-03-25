const express = require('express');

const Ongcontroller = require('./controllers/OngController');

const routes = express.Router();
/**
 * Tipos de parâmetros:
 * - Query: parâmetros nomeados enviados na rota após (user?var=valor&var2=valor2)
 * geralmente usados para filtros, paginação, listagens.
 * - RouteParams: Parâmetros utilizados para identificar recursos. (ex: user/:id)
 * - RequestBody: Parâmetros enviados no corpo da requisição. usado para criar ou alterar recursos.
 */

routes.get('/ongs', Ongcontroller.index);
routes.post('/ongs', Ongcontroller.create);
routes.post('/incidents', Inci)
module.exports = routes;
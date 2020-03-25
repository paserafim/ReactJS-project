
const routes = require('./routes');


// Avisar o Express que todos os request transformar em json
routes.use(express.json());

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

app.post('/user', (request, response) => {
    const params = request.body;      // para do corpo do request
    // const params = request.params;      // para parametros /:id
    //const params = request.query;    // para buscar variaveis da query

    console.log(params);

    return response.json({
        evento: 'myApp',
        aluno: 'Paulo Alexandre Serafim'
    });
});

app.listen(3333);
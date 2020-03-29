const knex = require('knex');
const configuration = require('../../knexfile');

const 

const connection = knex(configuration.development);

module.exports = connection;
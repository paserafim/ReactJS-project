const knex = require('knex');
const configuration = require('../../knexfile');

const env = 

const connection = knex(configuration.development);

module.exports = connection;
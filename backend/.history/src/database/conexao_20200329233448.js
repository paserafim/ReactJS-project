const knex = require('knex');
const configuration = require('../../knexfile');

const config = process.env.NODE_ENV;

const connection = knex(configuration.development);

module.exports = connection;
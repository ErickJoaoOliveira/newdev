const environment = process.env.ENVIROMNENT || 'development';

const config = require('../../knexfile')[environment];

const knex = require('knex')(config);

module.exports = knex;
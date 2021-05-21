const knex = require('knex');
const configuration = require('../../knexfile.js');
require('dotenv').config();

const env = 'development';

const connection = knex(configuration[env]);

module.exports = connection;
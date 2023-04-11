const { createPool } = require('mysql2');
const DBConfig = require('../config/DBConfig');

const pool = createPool(DBConfig);

const DB = pool;

module.exports = DB;

// Class 형태로 바꾸어서 Singleton Pattern
const { createPool } = require('mysql2/promise');
const DBConfig = require('../config/DBConfig');

const pool = createPool(DBConfig);

const DB = pool;

module.exports = DB;

const db = require('../../utils/db');
const querys = require('./MainRepository');
const bookQuerys = require('../books/BooksRepository');
const MainService = {
  getBookList: async () => {
    try {
      const query = bookQuerys.getBookList();
      const conn = await db.getConnection();
      const [result] = await conn.query(query);
      return result;
    } catch (error) {
      throw error;
    }
  },
  getData: async () => {
    try {
      const query = querys.getData();
      const conn = await db.getConnection();
      const [result] = await conn.query(query);
      return result;
    } catch (error) {
      throw error;
    }
  },
};

module.exports = MainService;

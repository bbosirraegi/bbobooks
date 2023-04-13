const db = require('../../utils/db');
const querys = require('./BooksRepository');
const BooksService = {
  getBookList: async () => {
    try {
      const query = querys.getBookList();
      const conn = await db.getConnection();
      const [result] = await conn.query(query);
      return result;
    } catch (error) {
      throw error;
    }
  },
};

module.exports = BooksService;

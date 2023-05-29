const db = require('../../utils/db');
const querys = require('./BooksRepository');
const BooksService = {
  getBookList: async () => {
    try {
      const query = querys.getBookList();
      const conn = await db.getConnection();
      const [result] = await conn.query(query);
      conn.release();
      return result;
    } catch (error) {
      throw error;
    }
  },
  getBook: async (book_id) => {
    const query = querys.getBook();
    const conn = await db.getConnection();
    const [[result]] = await conn.query(query, [book_id]);
    conn.release();
    return result;
  },
};

module.exports = BooksService;

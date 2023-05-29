const db = require('../../utils/db');
const cartRepository = require('./CartRepository');
const CartService = {
  addCart: async (cartInfo) => {
    try {
      const { user_id, book } = cartInfo;
      const { book_id } = book;
      const query = cartRepository.addCart();
      const conn = await db.getConnection();
      const [result] = await conn.query(query, [user_id, book_id, 1]);
      return result;
    } catch (error) {
      throw error;
    }
  },
  getCartList: async (user_id) => {
    try {
      const query = cartRepository.getCartList();
      const conn = await db.getConnection();
      const [result] = await conn.query(query, [user_id]);
      conn.release();
      return result;
    } catch (error) {
      throw error;
    }
  },
};

module.exports = CartService;

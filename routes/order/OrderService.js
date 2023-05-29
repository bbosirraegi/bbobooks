const db = require('../../utils/db');
const orderRepository = require('./OrderRepository');
const OrderService = {
  createOrder: async () => {
    const conn = await db.getConnection();
    try {
      await conn.beginTransaction();
      const query = orderRepository.createOrder();
      const [result] = await conn.query(query);
      conn.release();
      await conn.commit();
      return result;
    } catch (error) {
      await conn.rollback();
      throw error;
    } finally {
      conn.release();
    }
  },
};

module.exports = OrderService;

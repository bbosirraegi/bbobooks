const db = require('../../utils/db');
const querys = require('./AuthRepository');
const AuthService = {
  login: async (loginInfo) => {
    try {
      const { user_id, user_pw } = loginInfo;
      const query = querys.login();
      const conn = await db.getConnection();
      const [[result]] = await conn.query(query, [user_id, user_pw]);
      if (!result) {
        throw new Error('아이디 또는 비밀번호가 일치하지 않습니다.');
      }
      conn.release();
      delete result.user_pw;
      return result;
    } catch (error) {
      throw error;
    }
  },
  join: async (joinInfo) => {
    const conn = await db.getConnection();
    try {
      const { user_id, user_pw, user_nm, user_grade } = joinInfo;
      const query = querys.join();

      await conn.beginTransaction();
      const result = await conn.query(query, [
        user_id,
        user_pw,
        user_nm,
        user_grade,
      ]);

      const cartQuery = querys.addCart();

      await conn.query(cartQuery, [user_id, user_id]);

      await conn.commit();

      return result;
    } catch (error) {
      throw error;
    } finally {
      conn.release();
    }
  },
};

module.exports = AuthService;

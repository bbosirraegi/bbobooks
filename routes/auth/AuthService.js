const db = require('../../utils/db');
const querys = require('./AuthRepository');
const AuthService = {
  login: async (loginInfo) => {
    try {
      const { user_id, user_pw } = loginInfo;
      const query = querys.login();
      const conn = await db.getConnection();
      const [[result]] = await conn.query(query, [user_id, user_pw]);
      delete result.user_pw;
      return result;
    } catch (error) {
      throw error;
    }
  },
  join: async (joinInfo) => {
    try {
      const { user_id, user_pw, user_nm, user_grade } = joinInfo;
      const query = querys.join();
      const conn = await db.getConnection();
      const result = await conn.query(query, [
        user_id,
        user_pw,
        user_nm,
        user_grade,
      ]);
      return result;
    } catch (error) {
      throw error;
    }
  },
};

module.exports = AuthService;

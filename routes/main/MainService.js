const db = require('../../utils/db');
const MainService = {
  getData: async () => {
    try {
      const conn = db.getConnection();
      const result = await conn.query();
    } catch (error) {}
  },
};

module.exports = MainService;

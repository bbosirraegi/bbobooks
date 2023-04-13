var express = require('express');
const MainService = require('./MainService');
var router = express.Router();

router.get('/', async (req, res, next) => {
  const result = await MainService.getBookList();
  res.render('index', { page: 'pages/main', bookList: result });
});

module.exports = router;

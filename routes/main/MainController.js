var express = require('express');
const MainService = require('./MainService'); // => Class, DI
var router = express.Router();

router.get('/', async (req, res, next) => {
  const result = await MainService.getBookList();
  // const user = {
  //   user_id: 'ongdv',
  //   user_name: 'Name',
  //   user_grade: 'Gold',
  // };
  // req.session = { user };
  res.render('index', {
    page: 'pages/main',
    bookList: result,
    session: req.session.user,
  });
});

router.get('/mypage', async (req, res, next) => {
  console.log(req.session);
  res.render('index', { page: 'pages/mypage', session: req.session.user });
});

module.exports = router;

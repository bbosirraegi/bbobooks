var express = require('express');
const BooksService = require('./BooksService');
var router = express.Router();

router.get('/:book_id', async (req, res, next) => {
  const result = await BooksService.getBook(req.params.book_id);
  if (result) {
    res.render('index', {
      page: 'pages/book',
      book: result,
      session: req.session.user,
    });
    return;
  }
  res.redirect('/');
});

module.exports = router;

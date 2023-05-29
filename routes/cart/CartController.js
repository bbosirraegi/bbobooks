var express = require('express');
const CartService = require('./CartService');
var router = express.Router();

router.post('/', async (req, res, next) => {
  if (!req.session.user) {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.write('<script>alert("로그인이 필요합니다.");</script>');
    res.write('<script>location.href="/auth/login";</script>');
    return;
  }
  const cartInfo = {
    user_id: req.session.user.user_id,
    book: req.body,
  };
  const result = await CartService.addCart(cartInfo);
  if (result) {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.write('<script>alert("장바구니에 담겼습니다.");</script>');
    res.write('<script>history.go(-1);</script>');
    return;
  }
  res.redirect('/');
});

router.get('/', async (req, res, next) => {
  if (!req.session.user) {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.write('<script>alert("로그인이 필요합니다.");</script>');
    res.write('<script>location.href="/auth/login";</script>');
    return;
  }
  const result = await CartService.getCartList(req.session.user.user_id);
  if (result) {
    res.render('index', {
      page: 'pages/cart',
      cart: result,
      session: req.session,
    });
    return;
  }
  res.redirect('/');
});

module.exports = router;

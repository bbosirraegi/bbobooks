var express = require('express');
const OrderService = require('./OrderService');
const CartService = require('../cart/CartService');
var router = express.Router();

router.post('/', async (req, res, next) => {
  if (!req.session.user) {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.write('<script>alert("로그인이 필요합니다.");</script>');
    res.write('<script>location.href="/auth/login";</script>');
    return;
  }
  const orderInfo = {
    user_id: req.session.user.user_id,
    order: req.body,
  };
  const result = await OrderService.createOrder(orderInfo);
  if (result) {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.write('<script>alert("주문이 완료되었습니다.");</script>');
    res.write('<script>location.href="/"</script>');
    return;
  }
  res.redirect('/');
});

router.post('/set', async (req, res, next) => {
  if (!req.session.user) {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.write('<script>alert("로그인이 필요합니다.");</script>');
    res.write('<script>location.href="/auth/login";</script>');
    return;
  }
  console.log(req.body);
  console.log(typeof req.body.order_item);

  res.redirect('/order');
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
      page: 'pages/order',
      cart: result,
      session: req.session,
    });
    return;
  }
  res.redirect('/');
});

module.exports = router;

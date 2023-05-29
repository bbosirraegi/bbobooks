var express = require('express');
var router = express.Router();
var authService = require('./AuthService');

router.get('/login', async (req, res, next) => {
  res.render('auth', { page: 'pages/login', session: req.session });
});

router.get('/join', async (req, res, next) => {
  res.render('auth', { page: 'pages/join', session: req.session });
});

router.post('/login', async (req, res, next) => {
  try {
    const result = await authService.login(req.body);
    if (result) {
      req.session.user = result;
      return res.redirect('/');
    }
    res.render('auth', { page: 'pages/login', session: req.session });
  } catch (error) {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.write(`<script>alert("${error.message}");</script>`);
    res.write('<script>location.href="/auth/login";</script>');
  }
});

router.post('/join', async (req, res, next) => {
  const result = await authService.join(req.body);
  if (result) {
    res.redirect('/auth/login');
    return;
  }
  res.redirect('/auth/join');
});

router.post('/logout', async (req, res, next) => {
  req.session.destroy();
  return res.redirect('/');
});

module.exports = router;

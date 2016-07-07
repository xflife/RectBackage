var express = require('express');
var router = express.Router();
var loginRouter = require('./login');
var backageRouter = require('./backage');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//配置子路由
router.use(loginRouter);
router.use(backageRouter);

module.exports = router;

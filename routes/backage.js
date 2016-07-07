var express = require('express');
var router = express.Router();

router.get('/backage/:type', function (req, res) {
  res.render('backage');
});

module.exports = router;

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('teacraft', { title: 'はまだのブレンド' });
});

module.exports = router;
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Slack Tests Go Here' });
});

router.get('/word/:myword', function(req, res, next) {
  console.log('the word is ${req.params.myword}');
  res.render('index', { title: 'Word=${req.params.myword}' });
});

module.exports = router;

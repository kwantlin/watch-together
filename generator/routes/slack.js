const { IncomingWebhook } = require('@slack/webhook');




var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Slack Tests Go Here' });
});

router.get('/word/:myword', function(req, res, next) {
  sendMyMessage(req.params.myword);
  console.log(`the word is ${req.params.myword}`);
  //send that word to slack
  res.render('index', { title: `Word=${req.params.myword}` });
});

async function sendMyMessage (word) {
  (async () => {
    const webhook = new IncomingWebhook(process.env.SLACK_WEBHOOK_URL);

    await webhook.send({
      text: `my word is ${word}`,
    });
  })();
}

module.exports = router;

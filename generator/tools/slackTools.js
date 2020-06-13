
const { IncomingWebhook } = require('@slack/webhook');

const sendMyMessage = async function (word) {
  (async () => {
    const webhook = new IncomingWebhook(process.env.SLACK_WEBHOOK_URL);

    await webhook.send({
      text: `my word is ${word}`,
    });
  })();
}

module.sendMyMessage = sendMyMessage;

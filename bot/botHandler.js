/**
 * Отвечает на HTTP запросы от VK бот платформы
 *
 * @param {!Object} req Cloud Function контекст запроса.
 * @param {!Object} res Cloud Function контекст ответа.
 */
const request = require('request');
const dialogflow = require('dialogflow');

// TODO: заменить <REPLACE> на свои значения из настроек VK бота группы
const VK_GROUP_ID = '<REPLACE>';
const VK_CONFIRMATION_CODE = '<REPLACE>';
const VK_SECRET = '<REPLACE>';
const VK_ACCESS_TOKEN = '<REPLACE>';

const VK_MESSAGE_API = 'https://api.vk.com/method/messages.send';
const VK_API_VERSION = '5.74';

const MESSAGE_NEW = 'message_new';
const CONFIRMATION = 'confirmation';

// TODO: Заменить <REPLACE> на project id своего агента в dialogflow
const DF_PROJECT_ID = '<PROJECT_NAME>';

handleMessage = (user_id, mess) => {
  const sessionClient = new dialogflow.SessionsClient();
  const sessionPath = sessionClient.sessionPath(DF_PROJECT_ID, "1");
  let request = {
    session: sessionPath,
    queryInput: {
      text: {
        text: mess,
        languageCode: "RU",
      }
    }
  }
  sessionClient.detectIntent(request).then(responses => {
    const response = responses[0];
    request.get(renderUrl(user_id, response.queryResult), function(error,
      res,
      body) {
      console.log('statusCode:', res && res.statusCode);
      res.status(200).send('ok');
    });
  });
}

echoMessage = (user_id, mess) => {
  request.get(renderUrl(user_id, `ответ бота: ${mess}`),
    function(error,
      res,
      body) {
      console.log('statusCode:', res && res.statusCode);
      res.status(200).send('ok');
    });
}

renderUrl = (user_id, message) => {
  return
    `${VK_MESSAGE_API}?access_token=${VK_ACCESS_TOKEN}&user_id=${user_id}&message=${encodeURIComponent(message)}&v=${VK_API_VERSION}`;
}


exports.botHandler = (req, res) => {
  if (req.body.type == CONFIRMATION && req.body.group_id == VK_GROUP_ID) {
    res.status(200).send(VK_CONFIRMATION_CODE);
  } else if (req.body.type == MESSAGE_NEW && req.body.group_id ==
    VK_GROUP_ID &&
    req.body.secret == VK_SECRET) {
    const user_id = req.body.object.user_id;
    const message = req.body.object.body;

    echoMessage(user_id, message);
  } else {
    res.status(400).send('invalid request');
  }
};

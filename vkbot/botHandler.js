/**
 * Webhook для ответов на HTTP запросы от VK бот платформы
 */
const request = require('request');
const dialogflow = require('dialogflow');

/**
 * TODO: заменить <REPLACE> на свои значения
 * из настроек VK бота группы и DialogFlow
 */
const VK_GROUP_ID = '<REPLACE>';
const VK_CONFIRMATION_CODE = '<REPLACE>';
const VK_SECRET = '<REPLACE>';
const VK_ACCESS_TOKEN = '<REPLACE>';

const DF_PROJECT_ID = '<REPLACE>';

/**
 * Константы обработчика
 */
const VK_MESSAGE_API = 'https://api.vk.com/method/messages.send';
const VK_API_VERSION = '5.74';
const MESSAGE_NEW = 'message_new';
const CONFIRMATION = 'confirmation';
const OK_MESSAGE = 'ok';
const ERR_MESSAGE = 'invalid request';

const DF_SESSION_ID = '1';
const DF_LANG_CODE = 'RU';

/**
 * Возвращает URL для отправки личного сообщения ботом пользователю
 */
getVKSendMessageURL = (user_id, message) => {
  return `${VK_MESSAGE_API}?access_token=${VK_ACCESS_TOKEN}&user_id=${user_id}&message=${encodeURIComponent(message)}&v=${VK_API_VERSION}`;
}

/**
 * Отправляет сообщение пользователю
 */
sendVKMessage = (user_id, message) => {
  return request.get(getVKSendMessageURL(user_id, message),
    function(error, res, body) {
      console.log('statusCode: ', res && res.statusCode);
    });
}

/**
 * Получает ответ от DialogFlow агента
 */
handleDialogFlowMessage = (message) => {
  const sessionClient = new dialogflow.SessionsClient();
  const sessionPath = sessionClient.sessionPath(DF_PROJECT_ID, DF_SESSION_ID);
  const requestJson = {
    session: sessionPath,
    queryInput: {
      text: {
        text: message,
        languageCode: DF_LANG_CODE,
      }
    }
  }

  return sessionClient.detectIntent(requestJson)
    .then(function(responses) {
      return responses[0].queryResult.fulfillmentText;
    });
}

/**
 * Эхо отправка сообщения обратно пользователю
 */
handleEchoMessage = (message) => {
  return `ответ бота: ${message}`
}

exports.botHandler = (req, res) => {
  const { type, group_id, secret, object } = req.body;

  if (type == CONFIRMATION && group_id == VK_GROUP_ID) {
    res.status(200).send(VK_CONFIRMATION_CODE);

  } else if (type == MESSAGE_NEW && group_id == VK_GROUP_ID && secret == VK_SECRET) {
    const { user_id, body } = object;

    const response = handleEchoMessage(body);
    sendVKMessage(user_id, response);
    res.status(200).send(OK_MESSAGE);

    // TODO: переключиться на работу с DialogFlow
    // handleDialogFlowMessage(body).then((response) => {
    //   sendVKMessage(user_id, response);
    //   res.status(200).send(OK_MESSAGE);
    // })

  } else {
    res.status(400).send(ERR_MESSAGE);
  }
};

// See https://github.com/dialogflow/dialogflow-fulfillment-nodejs
// for Dialogflow fulfillment library docs, samples, and to report issues
'use strict';

const functions = require('firebase-functions');
const querystring = require('querystring');
const https = require('https');

process.env.DEBUG = 'dialogflow:debug'; // enables lib debugging statements

exports.dialogflowFirebaseFulfillment = functions.https.onRequest((request,
  response) => {

  console.log('Dialogflow Request headers: ' + JSON.stringify(request.headers));
  console.log('Dialogflow Request body: ' + JSON.stringify(request.body));

  function listFilms() {
    let params = request.body.queryResult.parameters;

    let date = Date.parse(params.date);
    let genre = params.genre;
    console.log(params.date);
    console.log(genre);
    console.log(date);

    var url =
      "https://us-central1-masterclass-chatbots.cloudfunctions.net/function-2/movies";
    if (genre) {
      url += "?genre=" + querystring.escape(genre);
    }
    https.get(url, (resp) => {
      let data = '';
      resp.on('data', (chunk) => {
        data += chunk;
      });

      resp.on('end', () => {
        let body = JSON.parse(data);
        console.log(body);
        let movies = body.movies.filter(movie => Date.parse(movie.startdate) <=
          date).map(movie => movie.title).join(", ");
        console.log(movies);
        if (movies) {
          send(movies);
        } else {
          send("Таких фильмов нет");
        }
      });
    });
  }

  function send(message) {
    response.send(JSON.stringify({
      "displayText": message,
      "speech": message
    }));
  }

  if (request.body.queryResult.action == "list-films") {
    listFilms();
  }
});

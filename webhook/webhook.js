// See https://github.com/dialogflow/dialogflow-fulfillment-nodejs
// for Dialogflow fulfillment library docs, samples, and to report issues
'use strict';

const querystring = require('querystring');
const https = require('https');

process.env.DEBUG = 'dialogflow:debug'; // enables lib debugging statements

exports.webhook = (request, response) => {
  console.log('Dialogflow Request headers: ' + JSON.stringify(request.headers));
  console.log('Dialogflow Request body: ' + JSON.stringify(request.body));
  const approxTwoWeeks = 1000 * 60 * 60 * 24 * 14;

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

      let filterMovie = function(movie) {
        let movieStartDate = Date.parse(movie.startdate)
        if (movieStartDate > date || movieStartDate < date -
          approxTwoWeeks) {
          return false;
        }
        if (movie.title.includes("АртЛекторийВкино") ||
          movie.title.includes("TheatreHD")) {
          return false;
        }
        return true;
      }

      resp.on('end', () => {
        let body = JSON.parse(data);
        console.log(body);
        let movies = body.movies.filter(filterMovie).map(movie =>
          movie.title).slice(0, 5).join(", ");
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
    response.send({
      "fulfillmentText": message
    });
  }

  if (request.body.queryResult.action == "list-films") {
    listFilms();
  }
};

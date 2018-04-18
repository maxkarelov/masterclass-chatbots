var request = require('request');


exports.cinemaProxyCall = (req, res) => {
  const path = req.path;
  const { title, date, genre, duration } = req.query;
  const lowerCaseTitle = title ? title.toLowerCase() : undefined;
  const lowerCaseGenre = genre ? genre.toLowerCase() : undefined;

  if (path == '/movies') {
    request.get('http://json.integration.www.cinemapark.ru/films/', function(err, resp, body) {
      var results = [];

      const jsonBody = JSON.parse(resp.body);

      for (let i = 0; i < jsonBody.films[0].film.length; i++) {
        const film = jsonBody.films[0].film[i];

        const movie = {
          id: film.film_id,
          title: film.title,
          original_title: film.original_title,
          genre: film.genre,
          duration: film.timing,
          startdate: film.startdate,
          youtube_id: film.youtubeid,
        }

        if (title && !movie.title.toLowerCase().includes(lowerCaseTitle)) {
          continue;
        }
        if (genre && !movie.genre.toLowerCase().includes(lowerCaseGenre)) {
          continue;
        }

        results.push(movie);
      }

      res.status(200).send({movies: results});
    });
  } else {
    res.status(200).send('unknown request');
  }
};

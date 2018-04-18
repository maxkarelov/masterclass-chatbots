API кинотеатра
==============

## Пример запроса
```
https://us-central1-masterclass-chatbots.cloudfunctions.net/function-2/movies?title=титан
```

## Пример ответа
```
{
  "movies": [
    {
      "id": "1629",
      "title": "Парк Юрского периода",
      "original_title": "Jurassic Park",
      "genre": "приключения/фантастика",
      "duration": "128",
      "startdate": "2018/05/12",
      "youtube_id": "6Sph9nGoKGk"
    }
  ]
}
```

## GET параметры для фильтров
* title
* genre
* startdate

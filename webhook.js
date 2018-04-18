// See https://github.com/dialogflow/dialogflow-fulfillment-nodejs
// for Dialogflow fulfillment library docs, samples, and to report issues
'use strict';

const functions = require('firebase-functions');
const {
  WebhookClient
} = require('dialogflow-fulfillment');
const {
  Card, Suggestion
} = require('dialogflow-fulfillment');
const http = require('http');
const querystring = require('querystring');

const weatherData = {
  "cod": "200",
  "message": 0.0032,
  "cnt": 40,
  "list": [{
    "dt": 1524009600,
    "main": {
      "temp": 281.52,
      "temp_min": 278.358,
      "temp_max": 281.52,
      "pressure": 1022.56,
      "sea_level": 1032.4,
      "grnd_level": 1022.56,
      "humidity": 85,
      "temp_kf": 3.16
    },
    "weather": [{
      "id": 801,
      "main": "Clouds",
      "description": "few clouds",
      "icon": "02n"
    }],
    "clouds": {
      "all": 12
    },
    "wind": {
      "speed": 1.51,
      "deg": 225.504
    },
    "rain": {},
    "sys": {
      "pod": "n"
    },
    "dt_txt": "2018-04-18 00:00:00"
  }, {
    "dt": 1524020400,
    "main": {
      "temp": 280.87,
      "temp_min": 278.502,
      "temp_max": 280.87,
      "pressure": 1022.27,
      "sea_level": 1032.11,
      "grnd_level": 1022.27,
      "humidity": 84,
      "temp_kf": 2.37
    },
    "weather": [{
      "id": 801,
      "main": "Clouds",
      "description": "few clouds",
      "icon": "02d"
    }],
    "clouds": {
      "all": 20
    },
    "wind": {
      "speed": 1.42,
      "deg": 200.005
    },
    "rain": {},
    "sys": {
      "pod": "d"
    },
    "dt_txt": "2018-04-18 03:00:00"
  }, {
    "dt": 1524031200,
    "main": {
      "temp": 286.04,
      "temp_min": 284.459,
      "temp_max": 286.04,
      "pressure": 1021.75,
      "sea_level": 1031.43,
      "grnd_level": 1021.75,
      "humidity": 90,
      "temp_kf": 1.58
    },
    "weather": [{
      "id": 500,
      "main": "Rain",
      "description": "light rain",
      "icon": "10d"
    }],
    "clouds": {
      "all": 32
    },
    "wind": {
      "speed": 2.17,
      "deg": 182.002
    },
    "rain": {
      "3h": 0.0032775
    },
    "sys": {
      "pod": "d"
    },
    "dt_txt": "2018-04-18 06:00:00"
  }, {
    "dt": 1524042000,
    "main": {
      "temp": 290.55,
      "temp_min": 289.755,
      "temp_max": 290.55,
      "pressure": 1020.4,
      "sea_level": 1029.98,
      "grnd_level": 1020.4,
      "humidity": 90,
      "temp_kf": 0.79
    },
    "weather": [{
      "id": 803,
      "main": "Clouds",
      "description": "broken clouds",
      "icon": "04d"
    }],
    "clouds": {
      "all": 56
    },
    "wind": {
      "speed": 2.97,
      "deg": 184.507
    },
    "rain": {},
    "sys": {
      "pod": "d"
    },
    "dt_txt": "2018-04-18 09:00:00"
  }, {
    "dt": 1524052800,
    "main": {
      "temp": 289.441,
      "temp_min": 289.441,
      "temp_max": 289.441,
      "pressure": 1019.47,
      "sea_level": 1028.97,
      "grnd_level": 1019.47,
      "humidity": 81,
      "temp_kf": 0
    },
    "weather": [{
      "id": 500,
      "main": "Rain",
      "description": "light rain",
      "icon": "10d"
    }],
    "clouds": {
      "all": 88
    },
    "wind": {
      "speed": 3.02,
      "deg": 255.002
    },
    "rain": {
      "3h": 0.0727625
    },
    "sys": {
      "pod": "d"
    },
    "dt_txt": "2018-04-18 12:00:00"
  }, {
    "dt": 1524063600,
    "main": {
      "temp": 288.077,
      "temp_min": 288.077,
      "temp_max": 288.077,
      "pressure": 1017.45,
      "sea_level": 1027.06,
      "grnd_level": 1017.45,
      "humidity": 73,
      "temp_kf": 0
    },
    "weather": [{
      "id": 804,
      "main": "Clouds",
      "description": "overcast clouds",
      "icon": "04d"
    }],
    "clouds": {
      "all": 92
    },
    "wind": {
      "speed": 3.7,
      "deg": 208.503
    },
    "rain": {},
    "sys": {
      "pod": "d"
    },
    "dt_txt": "2018-04-18 15:00:00"
  }, {
    "dt": 1524074400,
    "main": {
      "temp": 286.554,
      "temp_min": 286.554,
      "temp_max": 286.554,
      "pressure": 1015.79,
      "sea_level": 1025.25,
      "grnd_level": 1015.79,
      "humidity": 78,
      "temp_kf": 0
    },
    "weather": [{
      "id": 500,
      "main": "Rain",
      "description": "light rain",
      "icon": "10n"
    }],
    "clouds": {
      "all": 92
    },
    "wind": {
      "speed": 4.72,
      "deg": 200.001
    },
    "rain": {
      "3h": 0.126125
    },
    "sys": {
      "pod": "n"
    },
    "dt_txt": "2018-04-18 18:00:00"
  }, {
    "dt": 1524085200,
    "main": {
      "temp": 284.822,
      "temp_min": 284.822,
      "temp_max": 284.822,
      "pressure": 1013.72,
      "sea_level": 1023.22,
      "grnd_level": 1013.72,
      "humidity": 91,
      "temp_kf": 0
    },
    "weather": [{
      "id": 500,
      "main": "Rain",
      "description": "light rain",
      "icon": "10n"
    }],
    "clouds": {
      "all": 92
    },
    "wind": {
      "speed": 4.11,
      "deg": 226.001
    },
    "rain": {
      "3h": 1.374475
    },
    "sys": {
      "pod": "n"
    },
    "dt_txt": "2018-04-18 21:00:00"
  }, {
    "dt": 1524096000,
    "main": {
      "temp": 284.699,
      "temp_min": 284.699,
      "temp_max": 284.699,
      "pressure": 1010.93,
      "sea_level": 1020.49,
      "grnd_level": 1010.93,
      "humidity": 88,
      "temp_kf": 0
    },
    "weather": [{
      "id": 500,
      "main": "Rain",
      "description": "light rain",
      "icon": "10n"
    }],
    "clouds": {
      "all": 100
    },
    "wind": {
      "speed": 5.42,
      "deg": 207.501
    },
    "rain": {
      "3h": 0.31215
    },
    "sys": {
      "pod": "n"
    },
    "dt_txt": "2018-04-19 00:00:00"
  }, {
    "dt": 1524106800,
    "main": {
      "temp": 284.659,
      "temp_min": 284.659,
      "temp_max": 284.659,
      "pressure": 1008.77,
      "sea_level": 1018.34,
      "grnd_level": 1008.77,
      "humidity": 91,
      "temp_kf": 0
    },
    "weather": [{
      "id": 500,
      "main": "Rain",
      "description": "light rain",
      "icon": "10d"
    }],
    "clouds": {
      "all": 68
    },
    "wind": {
      "speed": 5.11,
      "deg": 216.501
    },
    "rain": {
      "3h": 0.08475
    },
    "sys": {
      "pod": "d"
    },
    "dt_txt": "2018-04-19 03:00:00"
  }, {
    "dt": 1524117600,
    "main": {
      "temp": 286.176,
      "temp_min": 286.176,
      "temp_max": 286.176,
      "pressure": 1007.86,
      "sea_level": 1017.34,
      "grnd_level": 1007.86,
      "humidity": 96,
      "temp_kf": 0
    },
    "weather": [{
      "id": 500,
      "main": "Rain",
      "description": "light rain",
      "icon": "10d"
    }],
    "clouds": {
      "all": 36
    },
    "wind": {
      "speed": 4.61,
      "deg": 246.003
    },
    "rain": {
      "3h": 0.04035
    },
    "sys": {
      "pod": "d"
    },
    "dt_txt": "2018-04-19 06:00:00"
  }, {
    "dt": 1524128400,
    "main": {
      "temp": 286.324,
      "temp_min": 286.324,
      "temp_max": 286.324,
      "pressure": 1007.01,
      "sea_level": 1016.41,
      "grnd_level": 1007.01,
      "humidity": 89,
      "temp_kf": 0
    },
    "weather": [{
      "id": 802,
      "main": "Clouds",
      "description": "scattered clouds",
      "icon": "03d"
    }],
    "clouds": {
      "all": 44
    },
    "wind": {
      "speed": 5.11,
      "deg": 232.003
    },
    "rain": {},
    "sys": {
      "pod": "d"
    },
    "dt_txt": "2018-04-19 09:00:00"
  }, {
    "dt": 1524139200,
    "main": {
      "temp": 286.604,
      "temp_min": 286.604,
      "temp_max": 286.604,
      "pressure": 1005.54,
      "sea_level": 1015,
      "grnd_level": 1005.54,
      "humidity": 85,
      "temp_kf": 0
    },
    "weather": [{
      "id": 802,
      "main": "Clouds",
      "description": "scattered clouds",
      "icon": "03d"
    }],
    "clouds": {
      "all": 48
    },
    "wind": {
      "speed": 4.47,
      "deg": 228.504
    },
    "rain": {},
    "sys": {
      "pod": "d"
    },
    "dt_txt": "2018-04-19 12:00:00"
  }, {
    "dt": 1524150000,
    "main": {
      "temp": 285.608,
      "temp_min": 285.608,
      "temp_max": 285.608,
      "pressure": 1004.32,
      "sea_level": 1013.76,
      "grnd_level": 1004.32,
      "humidity": 83,
      "temp_kf": 0
    },
    "weather": [{
      "id": 500,
      "main": "Rain",
      "description": "light rain",
      "icon": "10d"
    }],
    "clouds": {
      "all": 80
    },
    "wind": {
      "speed": 2.41,
      "deg": 225.501
    },
    "rain": {
      "3h": 0.0037000000000003
    },
    "sys": {
      "pod": "d"
    },
    "dt_txt": "2018-04-19 15:00:00"
  }, {
    "dt": 1524160800,
    "main": {
      "temp": 283.858,
      "temp_min": 283.858,
      "temp_max": 283.858,
      "pressure": 1004.31,
      "sea_level": 1013.87,
      "grnd_level": 1004.31,
      "humidity": 82,
      "temp_kf": 0
    },
    "weather": [{
      "id": 500,
      "main": "Rain",
      "description": "light rain",
      "icon": "10n"
    }],
    "clouds": {
      "all": 68
    },
    "wind": {
      "speed": 2.22,
      "deg": 189.501
    },
    "rain": {
      "3h": 0.05162
    },
    "sys": {
      "pod": "n"
    },
    "dt_txt": "2018-04-19 18:00:00"
  }, {
    "dt": 1524171600,
    "main": {
      "temp": 281.617,
      "temp_min": 281.617,
      "temp_max": 281.617,
      "pressure": 1003.5,
      "sea_level": 1013.2,
      "grnd_level": 1003.5,
      "humidity": 89,
      "temp_kf": 0
    },
    "weather": [{
      "id": 500,
      "main": "Rain",
      "description": "light rain",
      "icon": "10n"
    }],
    "clouds": {
      "all": 12
    },
    "wind": {
      "speed": 2.21,
      "deg": 171
    },
    "rain": {
      "3h": 0.02468
    },
    "sys": {
      "pod": "n"
    },
    "dt_txt": "2018-04-19 21:00:00"
  }, {
    "dt": 1524182400,
    "main": {
      "temp": 279.825,
      "temp_min": 279.825,
      "temp_max": 279.825,
      "pressure": 1002.99,
      "sea_level": 1012.7,
      "grnd_level": 1002.99,
      "humidity": 93,
      "temp_kf": 0
    },
    "weather": [{
      "id": 500,
      "main": "Rain",
      "description": "light rain",
      "icon": "10n"
    }],
    "clouds": {
      "all": 36
    },
    "wind": {
      "speed": 1.5,
      "deg": 186.002
    },
    "rain": {
      "3h": 0.00045000000000028
    },
    "sys": {
      "pod": "n"
    },
    "dt_txt": "2018-04-20 00:00:00"
  }, {
    "dt": 1524193200,
    "main": {
      "temp": 280.588,
      "temp_min": 280.588,
      "temp_max": 280.588,
      "pressure": 1003.04,
      "sea_level": 1012.68,
      "grnd_level": 1003.04,
      "humidity": 96,
      "temp_kf": 0
    },
    "weather": [{
      "id": 500,
      "main": "Rain",
      "description": "light rain",
      "icon": "10d"
    }],
    "clouds": {
      "all": 76
    },
    "wind": {
      "speed": 0.62,
      "deg": 200.007
    },
    "rain": {
      "3h": 0.0023999999999997
    },
    "sys": {
      "pod": "d"
    },
    "dt_txt": "2018-04-20 03:00:00"
  }, {
    "dt": 1524204000,
    "main": {
      "temp": 283.194,
      "temp_min": 283.194,
      "temp_max": 283.194,
      "pressure": 1003.78,
      "sea_level": 1013.32,
      "grnd_level": 1003.78,
      "humidity": 100,
      "temp_kf": 0
    },
    "weather": [{
      "id": 500,
      "main": "Rain",
      "description": "light rain",
      "icon": "10d"
    }],
    "clouds": {
      "all": 68
    },
    "wind": {
      "speed": 1.43,
      "deg": 16.5035
    },
    "rain": {
      "3h": 0.00142
    },
    "sys": {
      "pod": "d"
    },
    "dt_txt": "2018-04-20 06:00:00"
  }, {
    "dt": 1524214800,
    "main": {
      "temp": 283.759,
      "temp_min": 283.759,
      "temp_max": 283.759,
      "pressure": 1004.7,
      "sea_level": 1014.08,
      "grnd_level": 1004.7,
      "humidity": 98,
      "temp_kf": 0
    },
    "weather": [{
      "id": 500,
      "main": "Rain",
      "description": "light rain",
      "icon": "10d"
    }],
    "clouds": {
      "all": 88
    },
    "wind": {
      "speed": 2.56,
      "deg": 13.0002
    },
    "rain": {
      "3h": 1.05098
    },
    "sys": {
      "pod": "d"
    },
    "dt_txt": "2018-04-20 09:00:00"
  }, {
    "dt": 1524225600,
    "main": {
      "temp": 285.039,
      "temp_min": 285.039,
      "temp_max": 285.039,
      "pressure": 1005.24,
      "sea_level": 1014.71,
      "grnd_level": 1005.24,
      "humidity": 100,
      "temp_kf": 0
    },
    "weather": [{
      "id": 500,
      "main": "Rain",
      "description": "light rain",
      "icon": "10d"
    }],
    "clouds": {
      "all": 8
    },
    "wind": {
      "speed": 1.81,
      "deg": 14.5039
    },
    "rain": {
      "3h": 0.60185
    },
    "sys": {
      "pod": "d"
    },
    "dt_txt": "2018-04-20 12:00:00"
  }, {
    "dt": 1524236400,
    "main": {
      "temp": 282.825,
      "temp_min": 282.825,
      "temp_max": 282.825,
      "pressure": 1007.37,
      "sea_level": 1016.99,
      "grnd_level": 1007.37,
      "humidity": 99,
      "temp_kf": 0
    },
    "weather": [{
      "id": 500,
      "main": "Rain",
      "description": "light rain",
      "icon": "10d"
    }],
    "clouds": {
      "all": 68
    },
    "wind": {
      "speed": 6.5,
      "deg": 18.0001
    },
    "rain": {
      "3h": 2.54625
    },
    "sys": {
      "pod": "d"
    },
    "dt_txt": "2018-04-20 15:00:00"
  }, {
    "dt": 1524247200,
    "main": {
      "temp": 279.944,
      "temp_min": 279.944,
      "temp_max": 279.944,
      "pressure": 1010.77,
      "sea_level": 1020.4,
      "grnd_level": 1010.77,
      "humidity": 93,
      "temp_kf": 0
    },
    "weather": [{
      "id": 500,
      "main": "Rain",
      "description": "light rain",
      "icon": "10n"
    }],
    "clouds": {
      "all": 32
    },
    "wind": {
      "speed": 6.11,
      "deg": 22.5004
    },
    "rain": {
      "3h": 0.12442
    },
    "sys": {
      "pod": "n"
    },
    "dt_txt": "2018-04-20 18:00:00"
  }, {
    "dt": 1524258000,
    "main": {
      "temp": 278.4,
      "temp_min": 278.4,
      "temp_max": 278.4,
      "pressure": 1012.03,
      "sea_level": 1021.8,
      "grnd_level": 1012.03,
      "humidity": 96,
      "temp_kf": 0
    },
    "weather": [{
      "id": 500,
      "main": "Rain",
      "description": "light rain",
      "icon": "10n"
    }],
    "clouds": {
      "all": 0
    },
    "wind": {
      "speed": 4.47,
      "deg": 17.5016
    },
    "rain": {
      "3h": 0.00037999999999982
    },
    "sys": {
      "pod": "n"
    },
    "dt_txt": "2018-04-20 21:00:00"
  }, {
    "dt": 1524268800,
    "main": {
      "temp": 276.616,
      "temp_min": 276.616,
      "temp_max": 276.616,
      "pressure": 1013.28,
      "sea_level": 1023.13,
      "grnd_level": 1013.28,
      "humidity": 95,
      "temp_kf": 0
    },
    "weather": [{
      "id": 801,
      "main": "Clouds",
      "description": "few clouds",
      "icon": "02n"
    }],
    "clouds": {
      "all": 12
    },
    "wind": {
      "speed": 3.75,
      "deg": 21.5042
    },
    "rain": {},
    "sys": {
      "pod": "n"
    },
    "dt_txt": "2018-04-21 00:00:00"
  }, {
    "dt": 1524279600,
    "main": {
      "temp": 276.205,
      "temp_min": 276.205,
      "temp_max": 276.205,
      "pressure": 1014.21,
      "sea_level": 1024.06,
      "grnd_level": 1014.21,
      "humidity": 98,
      "temp_kf": 0
    },
    "weather": [{
      "id": 801,
      "main": "Clouds",
      "description": "few clouds",
      "icon": "02d"
    }],
    "clouds": {
      "all": 20
    },
    "wind": {
      "speed": 2.24,
      "deg": 16.5046
    },
    "rain": {},
    "sys": {
      "pod": "d"
    },
    "dt_txt": "2018-04-21 03:00:00"
  }, {
    "dt": 1524290400,
    "main": {
      "temp": 278.79,
      "temp_min": 278.79,
      "temp_max": 278.79,
      "pressure": 1014.16,
      "sea_level": 1023.91,
      "grnd_level": 1014.16,
      "humidity": 100,
      "temp_kf": 0
    },
    "weather": [{
      "id": 800,
      "main": "Clear",
      "description": "clear sky",
      "icon": "02d"
    }],
    "clouds": {
      "all": 8
    },
    "wind": {
      "speed": 1.23,
      "deg": 140.003
    },
    "rain": {},
    "sys": {
      "pod": "d"
    },
    "dt_txt": "2018-04-21 06:00:00"
  }, {
    "dt": 1524301200,
    "main": {
      "temp": 281.746,
      "temp_min": 281.746,
      "temp_max": 281.746,
      "pressure": 1012.67,
      "sea_level": 1022.3,
      "grnd_level": 1012.67,
      "humidity": 98,
      "temp_kf": 0
    },
    "weather": [{
      "id": 802,
      "main": "Clouds",
      "description": "scattered clouds",
      "icon": "03d"
    }],
    "clouds": {
      "all": 32
    },
    "wind": {
      "speed": 3.83,
      "deg": 209.503
    },
    "rain": {},
    "sys": {
      "pod": "d"
    },
    "dt_txt": "2018-04-21 09:00:00"
  }, {
    "dt": 1524312000,
    "main": {
      "temp": 284.376,
      "temp_min": 284.376,
      "temp_max": 284.376,
      "pressure": 1009.96,
      "sea_level": 1019.5,
      "grnd_level": 1009.96,
      "humidity": 86,
      "temp_kf": 0
    },
    "weather": [{
      "id": 802,
      "main": "Clouds",
      "description": "scattered clouds",
      "icon": "03d"
    }],
    "clouds": {
      "all": 48
    },
    "wind": {
      "speed": 6.09,
      "deg": 224
    },
    "rain": {},
    "sys": {
      "pod": "d"
    },
    "dt_txt": "2018-04-21 12:00:00"
  }, {
    "dt": 1524322800,
    "main": {
      "temp": 283.119,
      "temp_min": 283.119,
      "temp_max": 283.119,
      "pressure": 1007.73,
      "sea_level": 1017.34,
      "grnd_level": 1007.73,
      "humidity": 81,
      "temp_kf": 0
    },
    "weather": [{
      "id": 500,
      "main": "Rain",
      "description": "light rain",
      "icon": "10d"
    }],
    "clouds": {
      "all": 92
    },
    "wind": {
      "speed": 6.89,
      "deg": 236.001
    },
    "rain": {
      "3h": 0.20105
    },
    "sys": {
      "pod": "d"
    },
    "dt_txt": "2018-04-21 15:00:00"
  }, {
    "dt": 1524333600,
    "main": {
      "temp": 283.022,
      "temp_min": 283.022,
      "temp_max": 283.022,
      "pressure": 1005.66,
      "sea_level": 1015.24,
      "grnd_level": 1005.66,
      "humidity": 83,
      "temp_kf": 0
    },
    "weather": [{
      "id": 500,
      "main": "Rain",
      "description": "light rain",
      "icon": "10n"
    }],
    "clouds": {
      "all": 92
    },
    "wind": {
      "speed": 7.09,
      "deg": 230.003
    },
    "rain": {
      "3h": 0.2035
    },
    "sys": {
      "pod": "n"
    },
    "dt_txt": "2018-04-21 18:00:00"
  }, {
    "dt": 1524344400,
    "main": {
      "temp": 284.088,
      "temp_min": 284.088,
      "temp_max": 284.088,
      "pressure": 1002.13,
      "sea_level": 1011.7,
      "grnd_level": 1002.13,
      "humidity": 83,
      "temp_kf": 0
    },
    "weather": [{
      "id": 500,
      "main": "Rain",
      "description": "light rain",
      "icon": "10n"
    }],
    "clouds": {
      "all": 80
    },
    "wind": {
      "speed": 7.72,
      "deg": 229.01
    },
    "rain": {
      "3h": 0.0929
    },
    "sys": {
      "pod": "n"
    },
    "dt_txt": "2018-04-21 21:00:00"
  }, {
    "dt": 1524355200,
    "main": {
      "temp": 285.018,
      "temp_min": 285.018,
      "temp_max": 285.018,
      "pressure": 998.87,
      "sea_level": 1008.32,
      "grnd_level": 998.87,
      "humidity": 81,
      "temp_kf": 0
    },
    "weather": [{
      "id": 500,
      "main": "Rain",
      "description": "light rain",
      "icon": "10n"
    }],
    "clouds": {
      "all": 48
    },
    "wind": {
      "speed": 8.07,
      "deg": 233.503
    },
    "rain": {
      "3h": 0.020099999999999
    },
    "sys": {
      "pod": "n"
    },
    "dt_txt": "2018-04-22 00:00:00"
  }, {
    "dt": 1524366000,
    "main": {
      "temp": 284.216,
      "temp_min": 284.216,
      "temp_max": 284.216,
      "pressure": 997.14,
      "sea_level": 1006.69,
      "grnd_level": 997.14,
      "humidity": 91,
      "temp_kf": 0
    },
    "weather": [{
      "id": 500,
      "main": "Rain",
      "description": "light rain",
      "icon": "10d"
    }],
    "clouds": {
      "all": 88
    },
    "wind": {
      "speed": 7.82,
      "deg": 248.505
    },
    "rain": {
      "3h": 0.67445
    },
    "sys": {
      "pod": "d"
    },
    "dt_txt": "2018-04-22 03:00:00"
  }, {
    "dt": 1524376800,
    "main": {
      "temp": 284.267,
      "temp_min": 284.267,
      "temp_max": 284.267,
      "pressure": 997.06,
      "sea_level": 1006.4,
      "grnd_level": 997.06,
      "humidity": 97,
      "temp_kf": 0
    },
    "weather": [{
      "id": 500,
      "main": "Rain",
      "description": "light rain",
      "icon": "10d"
    }],
    "clouds": {
      "all": 68
    },
    "wind": {
      "speed": 6.97,
      "deg": 267.502
    },
    "rain": {
      "3h": 0.5104
    },
    "sys": {
      "pod": "d"
    },
    "dt_txt": "2018-04-22 06:00:00"
  }, {
    "dt": 1524387600,
    "main": {
      "temp": 284.962,
      "temp_min": 284.962,
      "temp_max": 284.962,
      "pressure": 997.89,
      "sea_level": 1007.31,
      "grnd_level": 997.89,
      "humidity": 82,
      "temp_kf": 0
    },
    "weather": [{
      "id": 500,
      "main": "Rain",
      "description": "light rain",
      "icon": "10d"
    }],
    "clouds": {
      "all": 12
    },
    "wind": {
      "speed": 9.81,
      "deg": 274.502
    },
    "rain": {
      "3h": 0.01365
    },
    "sys": {
      "pod": "d"
    },
    "dt_txt": "2018-04-22 09:00:00"
  }, {
    "dt": 1524398400,
    "main": {
      "temp": 284.282,
      "temp_min": 284.282,
      "temp_max": 284.282,
      "pressure": 1000.04,
      "sea_level": 1009.55,
      "grnd_level": 1000.04,
      "humidity": 73,
      "temp_kf": 0
    },
    "weather": [{
      "id": 800,
      "main": "Clear",
      "description": "clear sky",
      "icon": "01d"
    }],
    "clouds": {
      "all": 12
    },
    "wind": {
      "speed": 8.51,
      "deg": 294.002
    },
    "rain": {
      "3h": 0.000049999999999883
    },
    "sys": {
      "pod": "d"
    },
    "dt_txt": "2018-04-22 12:00:00"
  }, {
    "dt": 1524409200,
    "main": {
      "temp": 282.576,
      "temp_min": 282.576,
      "temp_max": 282.576,
      "pressure": 1002.2,
      "sea_level": 1011.83,
      "grnd_level": 1002.2,
      "humidity": 72,
      "temp_kf": 0
    },
    "weather": [{
      "id": 500,
      "main": "Rain",
      "description": "light rain",
      "icon": "10d"
    }],
    "clouds": {
      "all": 56
    },
    "wind": {
      "speed": 6.71,
      "deg": 291.001
    },
    "rain": {
      "3h": 0.0288
    },
    "sys": {
      "pod": "d"
    },
    "dt_txt": "2018-04-22 15:00:00"
  }, {
    "dt": 1524420000,
    "main": {
      "temp": 281.524,
      "temp_min": 281.524,
      "temp_max": 281.524,
      "pressure": 1004.23,
      "sea_level": 1013.89,
      "grnd_level": 1004.23,
      "humidity": 73,
      "temp_kf": 0
    },
    "weather": [{
      "id": 803,
      "main": "Clouds",
      "description": "broken clouds",
      "icon": "04n"
    }],
    "clouds": {
      "all": 56
    },
    "wind": {
      "speed": 5.41,
      "deg": 285.503
    },
    "rain": {},
    "sys": {
      "pod": "n"
    },
    "dt_txt": "2018-04-22 18:00:00"
  }, {
    "dt": 1524430800,
    "main": {
      "temp": 280.318,
      "temp_min": 280.318,
      "temp_max": 280.318,
      "pressure": 1004.87,
      "sea_level": 1014.54,
      "grnd_level": 1004.87,
      "humidity": 77,
      "temp_kf": 0
    },
    "weather": [{
      "id": 801,
      "main": "Clouds",
      "description": "few clouds",
      "icon": "02n"
    }],
    "clouds": {
      "all": 12
    },
    "wind": {
      "speed": 4.82,
      "deg": 271.001
    },
    "rain": {},
    "sys": {
      "pod": "n"
    },
    "dt_txt": "2018-04-22 21:00:00"
  }],
  "city": {
    "id": 498677,
    "name": "Saratov",
    "coord": {
      "lat": 51.53,
      "lon": 46.0347
    },
    "country": "RU",
    "population": 863725
  }
}


process.env.DEBUG = 'dialogflow:debug'; // enables lib debugging statements

exports.dialogflowFirebaseFulfillment = functions.https.onRequest((request,
  response) => {
  const agent = new WebhookClient({
    request, response
  });
  const threeHours = 60 * 3 * 60 * 1000;

  console.log('Dialogflow Request headers: ' + JSON.stringify(request.headers));
  console.log('Dialogflow Request body: ' + JSON.stringify(request.body));

  function welcome(agent) {
    agent.add(`Хотите узнать погоду?`);
  }

  function fallback(agent) {
    agent.add(`Не понял`);
    agent.add(`Можно сказать это другими словами?`);
  }

  function tellTemp(agent) {
    let params = request.body.result.parameters;

    let date = params.date ? Date.parse(params.date) : Date.now();
    console.log(params.date);
    console.log(date);
    let prediction = weatherData.list.find(weather => {
      let dist = Math.abs(weather.dt * 1000 - date);
      return dist < threeHours;
    });
    if (prediction) {
      console.log("found " + prediction.dt_txt)
      let tempInCelsius = Math.round(prediction.main.temp - 273.15);
      agent.add(`Температура ${tempInCelsius} градусов.`);
    } else {
      agent.add("Не могу найти прогноз погоды на " + params.date);
    }
  }

  let intentMap = new Map();
  intentMap.set('Default Welcome Intent', welcome);
  intentMap.set('Default Fallback Intent', fallback);
  intentMap.set('weather', tellTemp);
  agent.handleRequest(intentMap);
});
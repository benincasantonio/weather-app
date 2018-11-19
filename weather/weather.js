const request = require('request');
const fs = require('fs');

function fahrenheitToCelsius(temperature) {
    return (temperature - 32) * (5/9);
}

function getWeather(lat, lng, callback) {
    request(
        {
          url: `https://api.darksky.net/forecast/3f19042ada29f7091ba32e63eb311699/${lat},${lng}`,
          json: true
        },
        (error, response, body) => {
          if (!error && response.statusCode === 200) {
            let currently = response.body.currently;
            let responseObj = {
                temperature: currently.temperature,
                temperatureCelsius: fahrenheitToCelsius(currently.temperature),
                humidity: currently.humidity,
                precipProbability: currently.precipProbability
            };
            callback(undefined, responseObj);
          }else {
            callback("Unable to fetch the weather", undefined);
          }
        }
      );
}

module.exports.getWeather = getWeather;
module.exports.fahrenheitToCelsius = fahrenheitToCelsius;
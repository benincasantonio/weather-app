const yargs = require("yargs");
const geocode = require("./geocode/geocode");
const weather = require("./weather/weather");
const request = require("request");
const argv = yargs
  .options({
    address: {
      demand: true,
      alias: "a",
      describe: "Address to fetch weather for",
      string: true
    }
  })
  .help()
  .alias("help", "h").argv;
geocode.geocodeAddress(argv["a"], (errorMessage, results) => {
  if (errorMessage) {
    console.log(errorMessage);
  } else {
    request(
      {
        url: `https://api.darksky.net/forecast/3f19042ada29f7091ba32e63eb311699/${
          results.geometry.lat
        },${results.geometry.lng}`,
        json: true
      },
      (error, response, body) => {
        if (!error && response.statusCode === 200) {
          console.log(
            `${weather.fahrenheitToCelsius(body.currently.temperature)}°C`
          );
        }else {
          console.log("Unable to fetch the weather");
        }
      }
    );
    console.log(JSON.stringify(results, undefined, 2));
  }
});

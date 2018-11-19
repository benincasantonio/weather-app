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
    weather.getWeather(
      results.geometry.lat,
      results.geometry.lng,
      (errorMessage, results) => {
        if (errorMessage) {
          console.log(errorMessage);
        }else {
          console.log(JSON.stringify(results));
        }
      }
    );

    console.log(JSON.stringify(results, undefined, 2));
  }
});

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
geocode
  .geocodeAddress(argv["a"])
  .then(results => {
    console.log("Geocode", JSON.stringify(results, undefined, 2));

    weather
      .getWeather(results.geometry.lat, results.geometry.lng)
      .then(res => {
        console.log(`Weather: ${JSON.stringify(res, undefined, 2)}`);
      })
      .catch(error => {
        console.error(error);
      });
  })
  .catch(error => {
    console.error(error);
  });

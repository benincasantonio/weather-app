const request = require("request");
const yargs = require("yargs");

const argv = yargs.options({
  address: {
    demand: true,
    alias: 'a',
    describe: "Address to fetch weather for",
    string: true
  }
}).help().alias('help', 'h').argv;


let address = encodeURI(argv['a']);
request(
  {
    url:
      `https://www.mapquestapi.com/geocoding/v1/address?key=hO3jIfrrkAlVg7tdAd8XXVAmGYYzor6l&location=${address}`,
    json: true
  },
  (error, response, body) => {
    for(let location of body.results) {
      console.log('street', locations.street);
      console.log('street', locations.adminArea5);
    }
  }
);

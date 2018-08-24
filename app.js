const request = require("request");

request(
  {
    url: "https://www.mapquestapi.com/geocoding/v1/address?key=hO3jIfrrkAlVg7tdAd8XXVAmGYYzor6l&location=hollywood%20blvd%20los%20angeles",
    json: true
  },
  (error, response, body) => {
    console.log(JSON.stringify(body, undefined, 2));
  }
);

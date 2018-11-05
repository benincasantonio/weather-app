const request = require("request");

function geocodeAddress(address) {
    let addressURI = encodeURIComponent(address);
request(
  {
    url:
      `https://www.mapquestapi.com/geocoding/v1/address?key=hO3jIfrrkAlVg7tdAd8XXVAmGYYzor6l&location=${addressURI}`,
    json: true
  },
  (error, response, body) => {
    for(let location of body.results) {
      console.log('street', location.locations[0].street);
      console.log('street', location.locations[0].adminArea5);
    }
  }
);

}

module.exports.geocodeAddress = geocodeAddress;
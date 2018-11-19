const request = require("request");

function geocodeAddress(address) {
  let addressURI = encodeURIComponent(address);
  return new Promise((resolve, reject) => {
  request(
    {
      url: `https://www.mapquestapi.com/geocoding/v1/address?key=hO3jIfrrkAlVg7tdAd8XXVAmGYYzor6l&location=${addressURI}`,
      json: true
    },
    (error, response, body) => {
      if (error) {
        reject("Unable to reach the Server");
      } else {
        if (body.results.length > 0) {
          for (let location of body.results) {
            let address = {
              address: location.locations[0].street,
              geometry: location.locations[0].latLng
            };
            resolve(address);
          }
        }else {
            reject('No Result');
        }
      }
    });
  });
}

module.exports.geocodeAddress = geocodeAddress;

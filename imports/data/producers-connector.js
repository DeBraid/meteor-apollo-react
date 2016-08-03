import rp from 'request-promise';
import registrationRequests from './registrationRequests.js';

export const Producers = {
  getAll () {
    const uri = "https://lift.co/api/producers/";
    const request = {};
    const options = {
      uri,
      qs: request,
      headers: {
        'User-Agent': 'Request-Promise'
      },
      json: true // Automatically parses the JSON string in the response
    };
    return rp(options)
      .then(registrationRequests)
      .catch((err) => {
        console.error(err);
      });
   
  }

}

import rp from 'request-promise';

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
    return rp(options).then((res) => {
      console.log('res', res[0]);
      return res.map(({ name, registrationRequests }) => {
        return { name , registrationRequests };
      });
    }).catch((err) => {
      console.error(err);
    });
  }
}
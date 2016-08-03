// import { Producers } from '/imports/data/producers-connector';


const registrationRequests = (res) => {
  return res.map(({ name, registrationRequests }) => {
    return { name , registrationRequests };
  });
}

export default registrationRequests;

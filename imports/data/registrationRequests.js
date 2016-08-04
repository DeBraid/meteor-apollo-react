
const registrationRequests = (res) => {
  return res.map(({ name, registrationRequests }) => {
    return { name , registrationRequests };
  });
}

export default registrationRequests;

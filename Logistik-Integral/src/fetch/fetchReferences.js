const references = (apiResponse) => {
  const referencesResponse = apiResponse;
  return referencesResponse;
};

export default function fetchReferences() {
  return fetch("http://localhost:3002/sqlReferencias")
    .then((res) => res.json())
    .then(references);
}

const requests = (apiResponse) => {
  const requestsResponse = apiResponse;
  return requestsResponse;
};

export default function fetchRequestData(route = "") {
  return fetch(`http://localhost:3002/${route}`)
    .then((res) => res.json())
    .then(requests);
}

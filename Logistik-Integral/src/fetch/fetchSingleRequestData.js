const requests = (apiResponse) => {
  const requestsResponse = apiResponse;
  return requestsResponse;
};

export default function fetchRequestData() {
  return fetch("http://localhost:3002/RequestsData")
    .then((res) => res.json())
    .then(requests);
}

const response = (apiResponse) => {
  const requestData = apiResponse;
  return requestData;
};

export default function fetchRequests() {
  return fetch("http://localhost:3002/RequestInfo")
    .then((res) => res.json())
    .then(response);
}

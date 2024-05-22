const seriales = (apiResponse) => {
  const serialesResponse = apiResponse;
  return serialesResponse;
};

export default function fetchSeriales() {
  return fetch("http://localhost:3002/seriales")
    .then((res) => res.json())
    .then(seriales);
}

const DetailsId = (apiResponse) => {
  const serialesResponse = apiResponse;
  return serialesResponse;
};

export default function fetchDetailsId() {
  return fetch("http://localhost:3002/detailsId")
    .then((res) => res.json())
    .then(DetailsId);
}

const quantities = (apiResponse) => {
  const quantityResponse = apiResponse;
  return quantityResponse;
};

export default function fetchRefQuantity() {
  return fetch("http://localhost:3002/refQuntity")
    .then((res) => res.json())
    .then(quantities);
}

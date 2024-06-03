const receiverInfo = (apiResponse) => {
  const infoResponse = apiResponse;
  return infoResponse;
};

export default function fetchreceiverInfo() {
  return fetch("http://localhost:3002/ReceiverInfo")
    .then((res) => res.json())
    .then(receiverInfo);
}

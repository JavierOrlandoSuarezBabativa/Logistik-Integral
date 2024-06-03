export default function (array, id) {
  const requestArray = array.filter((object) => object.IdDestinatario == id);

  return requestArray;
}

export default function getSerials(array, id) {
  const requestArray = array.filter((object) => object.id_Ref == id);

  return requestArray;
}

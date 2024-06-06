export default function getDate() {
  const todayTime = Date.now();
  const date = new Date(todayTime).toLocaleDateString();
  const dateNewFormat = date.split("/").reverse().join("/");

  return dateNewFormat;
}

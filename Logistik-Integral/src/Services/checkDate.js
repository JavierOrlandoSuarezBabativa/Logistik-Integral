export default function checkDate(date) {
  let month = "";

  let splitDate = date.split("-");

  switch (splitDate[1]) {
    case "01":
      month = "January";
      break;
    case "02":
      month = "February";
      break;
    case "03":
      month = "March";
      break;
    case "04":
      month = "April";
      break;
    case "05":
      month = "May";
      break;
    case "06":
      month = "June";
      break;
    case "07":
      month = "July";
      break;
    case "08":
      month = "August";
      break;
    case "09":
      month = "September";
      break;
    case "10":
      month = "October";
      break;
    case "11":
      month = "November";
      break;
    default:
      month = "December";
  }

  let rearrangedDate = `${month} ${splitDate[2]}, ${splitDate[0]}`;

  let epochDate = Date.parse(rearrangedDate);
  let requestTime = new Date(epochDate).getTime();

  let currentDate = new Date(Date.now());

  let diferenceinTime = currentDate.getTime() - requestTime;

  return Math.round(diferenceinTime / (1000 * 3600 * 24));
}

export default function getFamilySymbol(family) {
  let familySymbol;

  switch (family) {
    case 1:
      familySymbol = "computer";
      break;
    case 2:
      familySymbol = "tablet";
      break;
    default:
      familySymbol = "smartphone";
  }

  return familySymbol;
}

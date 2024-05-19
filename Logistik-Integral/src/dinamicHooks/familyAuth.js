export const familyAuth = (param) => {
  let FAMILIA;

  if (typeof param === "object") {
    switch (param.familia) {
      case "Laptop":
        FAMILIA = "1";
        break;
      case "Tablet":
        FAMILIA = "2";
        break;
      case "Smartphone":
        FAMILIA = "3";
        break;
      default:
        break;
    }
    return FAMILIA;
  } else {
    if (typeof param == "string") {
      switch (param) {
        case "Laptop":
          FAMILIA = "1";
          break;
        case "Tablet":
          FAMILIA = "2";
          break;
        case "Smartphone":
          FAMILIA = "3";
          break;
        default:
          break;
      }
    }
    return FAMILIA;
  }
};

import { useState } from "react";

export default function GetUserInfo() {
  const [newInfo, setNewInfo] = useState({
    name: "",
    lastname: "",
    id: "",
    phone: "",
    role: "",
    password: "",
    werehouseNUmber: "",
    mail: "",
  });

  function addInfo(event) {
    const { name, value } = event.target;
    setNewInfo((prevNewReferenceInfo) => ({
      ...prevNewReferenceInfo,
      [name]: value,
    }));
  }

  return { newInfo, addInfo, setNewInfo };
}

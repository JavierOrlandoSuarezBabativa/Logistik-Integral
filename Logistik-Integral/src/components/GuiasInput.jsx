import { useState } from "react";
import Axios from "axios";
import getDate from "../Services/getDate.js";
import { useNavigate } from "react-router-dom";

export default function GuiasInput({ receiverId }) {
  const navigateTo = useNavigate();

  const [guia, setGuia] = useState("");

  function getInputValue(event) {
    setGuia(event.target.value);
  }

  function updateRequest() {
    Axios.put(`http://localhost:3002/ReceiverInfo/${receiverId}`, {
      guia: guia,
    }).then(
      Axios.put(`http://localhost:3002/RequestsData/${receiverId}`, {
        date: getDate(),
      }),
      navigateTo("/solicitudes")
    );
  }

  return (
    <>
      <div id="guiasInput">
        <input
          style={{ textAlign: "center" }}
          type="text"
          value={guia}
          onChange={getInputValue}
        />
        {/* <button>+</button> */}
        <button id="confirmationButton" onClick={updateRequest}>
          Confirmar
        </button>
      </div>
    </>
  );
}

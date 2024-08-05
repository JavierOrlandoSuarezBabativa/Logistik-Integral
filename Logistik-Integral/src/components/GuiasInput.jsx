import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Proptypes from "prop-types";
import Axios from "axios";

import getDate from "../Services/getDate.js";

import Alert from "./alert.jsx";

export default function GuiasInput({ receiverId }) {
  const navigateTo = useNavigate();

  const [guia, setGuia] = useState("");
  const [errorBox, setErrorBox] = useState(false);

  function getInputValue(event) {
    setErrorBox(false);
    setGuia(event.target.value);
  }

  function updateRequest() {
    if (typeof parseInt(guia) + 1 != "number" || guia == "") {
      setErrorBox(true);
    } else {
      Axios.put(`http://localhost:3002/ReceiverInfo/${receiverId}`, {
        guia: guia,
      }).then(
        Axios.put(`http://localhost:3002/RequestsData/${receiverId}`, {
          date: getDate(),
        }),
        navigateTo("/solicitudes")
      );
    }
  }

  return (
    <>
      <div id="guiasInput">
        <input type="text" value={guia} onChange={getInputValue} />
        <button id="confirmationButton" onClick={updateRequest}>
          Confirmar
        </button>
      </div>
      {errorBox && <Alert errorMessage="Numero de guia incorrecto" />}
    </>
  );
}

GuiasInput.propTypes = {
  receiverId: Proptypes.number,
};

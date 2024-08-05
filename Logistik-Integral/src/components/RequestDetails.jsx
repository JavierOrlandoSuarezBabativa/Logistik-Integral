import "../styles/Solicitudes.css";

import checkDate from "../Services/checkDate.js";

import { useNavigate } from "react-router-dom";
import { UserType } from "../App";
import { useContext } from "react";

import PropTypes from "prop-types";

export default function RequestDetails({
  id,
  status,
  observations,
  date,
  quantity,
  setRequestId,
}) {
  const { userType } = useContext(UserType);

  const navigateTo = useNavigate();

  let dateFormat = date.slice(0, date.indexOf("T"));

  let daysGOne = checkDate(dateFormat);

  return (
    <>
      <div className="solicitutes-container">
        <div
          className={
            daysGOne <= 15 ? "register-container" : "register-container-alert"
          }
        >
          <div className="estatus-register register-container-item">
            <h4>Estado</h4>
            <p>{status}</p>
          </div>

          <div className="observations-register register-container-item">
            <h4>Observaciones</h4>
            {status === "Gestionada con exito" ? (
              <i className="material-icons delete-can">delete</i>
            ) : null}
            <p id="observaciones">{observations}</p>
          </div>

          <div className="date-register register-container-item">
            <h4>Fecha</h4>
            <p>{dateFormat}</p>
          </div>

          <div className="id-register register-container-item">
            <h4>Cantidad</h4>
            <p>{quantity}</p>
          </div>

          <div className="details-register register-container-item">
            {status === "Gestionada con exito" ? (
              <i className="material-icons verified-icon">verified</i>
            ) : (
              <button
                onClick={() => {
                  setRequestId(id);
                  navigateTo("/solicitudesButton");
                }}
              >
                {userType == "Administrador"
                  ? "Detalles Solicitud"
                  : "Gestionar"}
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

RequestDetails.propTypes = {
  id: PropTypes.number,
  status: PropTypes.string,
  observations: PropTypes.string,
  date: PropTypes.string,
  quantity: PropTypes.number,
  setRequestId: PropTypes.func,
};

import "../styles/Solicitudes.css";

import { useNavigate } from "react-router-dom";

import PropTypes from "prop-types";

export default function References({
  valor,
  referencia,
  marca,
  modelo,
  hash,
  setSingleRef,
  pulgadas,
  storage,
  buttonDetail,
}) {
  const navigateTo = useNavigate();

  function getRefID() {
    setSingleRef(hash);
  }

  return (
    <>
      <div className="solicitutes-container">
        <div className="register-container">
          <div className="estatus-register register-container-item">
            <h4>Valor</h4>
            <p>{`$${valor},00`}</p>
          </div>

          <div className="observations-register register-container-item">
            <h4>Referencia</h4>
            <p id="observaciones">{referencia}</p>
            <p>{pulgadas}</p>
            <p>{storage}</p>
          </div>

          <div className="date-register register-container-item">
            <h4>Marca</h4>
            <p>{marca}</p>
          </div>

          <div className="id-register register-container-item">
            <h4>Modelo</h4>
            <p>{modelo}</p>
          </div>

          <div className="details-register register-container-item">
            <button
              onClick={() => {
                getRefID();
                navigateTo(`/id`);
              }}
            >
              {buttonDetail}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

References.propTypes = {
  valor: PropTypes.number,
  referencia: PropTypes.string,
  marca: PropTypes.string,
  modelo: PropTypes.number,
  hash: PropTypes.number,
  setSingleRef: PropTypes.func,
  pulgadas: PropTypes.string,
  storage: PropTypes.string,
  buttonDetail: PropTypes.string,
};

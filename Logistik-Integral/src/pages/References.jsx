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

  let firstDot;
  let secondDot;

  function priceFormat(valor) {
    let toString = valor.toString();
    let fullprice;
    firstDot = toString.slice(-3);
    if (toString.length == 7) {
      secondDot = toString.slice(1, 4);
      fullprice = toString.at(0) + "." + secondDot + "." + firstDot;
    } else {
      if (toString.length == 6) {
        secondDot = toString.slice(0, 3);
        fullprice = secondDot + "." + firstDot;
      }
    }

    return fullprice;
  }

  return (
    <>
      <div className="solicitutes-container">
        <div className="register-container">
          <div className="estatus-register register-container-item">
            <h4>Valor</h4>
            <p>{`$${priceFormat(valor)},00`}</p>
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

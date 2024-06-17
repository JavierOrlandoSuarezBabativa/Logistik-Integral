import PropTypes from "prop-types";
import Serials from "./Serials.jsx";
import { useRef, useState } from "react";

export default function Request({
  referencia,
  cantidad,
  serials,
  idRef,
  marca,
}) {
  const [checkBoxStatus, setCheckBoxStatus] = useState(false);
  const [showSerialsDiv, setShowSerialsDiv] = useState(true);

  let count = useRef(0);
  let serialsRef;

  if (serials != undefined) {
    serialsRef = serials.filter(
      (serialsObject) => serialsObject.id_Ref == idRef
    );
  }

  return (
    <>
      <div className="solicitute-register-container">
        <div className="solicitutes-grid">
          <div className="grid-item">
            <h3>Solicitud</h3>
            <br />
            {cantidad}
          </div>

          <div className="grid-item">
            <h3>Referencia</h3>
            <p id="reference-solicitute">{referencia}</p>
            <p>{marca}</p>
          </div>
          <div className="grid-item checkbox">
            {checkBoxStatus ? (
              <>
                <h3>OK</h3>
                <input type="checkbox" checked />
              </>
            ) : (
              <>
                <h3>Estado</h3>
                <input type="checkbox" />
              </>
            )}
          </div>

          <div className="grid-item">
            {serialsRef != undefined && showSerialsDiv
              ? serialsRef.map(({ id_Serial, Serial }) => {
                  return (
                    <Serials
                      key={id_Serial}
                      idSerial={id_Serial}
                      serial={Serial}
                      setCheckBoxStatus={setCheckBoxStatus}
                      cantidad={cantidad}
                      count={count}
                      setShowSerialsDiv={setShowSerialsDiv}
                      referencia={referencia}
                      marca={marca}
                    />
                  );
                })
              : null}
          </div>
        </div>
      </div>
    </>
  );
}

Request.propTypes = {
  referencia: PropTypes.string,
  cantidad: PropTypes.number,
  serials: PropTypes.array,
  idRef: PropTypes.number,
  marca: PropTypes.string,
};

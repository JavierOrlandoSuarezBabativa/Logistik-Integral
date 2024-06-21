import { useNavigate } from "react-router-dom";
import { Serials } from "../Routes/RenderRoutes.jsx";
import { useContext, useEffect, useState, memo } from "react";
import fetchRefQuantity from "../fetch/fetchSingleRefQuantity.js";
import getFamilySymbol from "../Services/getFamilySymbol.js";
import PropTypes from "prop-types";

const Inventarios = memo(function Inventarios({
  Family,
  Ref,
  // Marca, para sumar al final, antes de entregar el proyecto
  Total,
  Id_Ref,
}) {
  const navigateTo = useNavigate();

  const [requestQuantity, setRequestQuantity] = useState(null);
  const { setSerialRef } = useContext(Serials);

  useEffect(() => {
    fetchRefQuantity().then((res) => setRequestQuantity(res));
  }, []);

  function handleClick() {
    setSerialRef(Ref);
    navigateTo("/inventoryDetails");
  }

  function lowInventorySymbol() {
    if (requestQuantity != null) {
      let refQuantity = requestQuantity.find(
        (element) => element.ref == Id_Ref
      );
      return refQuantity;
    }
  }

  return (
    <>
      <div id="inventory-container">
        {lowInventorySymbol() != undefined &&
        lowInventorySymbol().total + 10 > Total ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {" "}
            <span
              className="material-icons"
              style={{ color: "red", fontSize: "2rem", margin: "5px" }}
            >
              {"warning"}
            </span>
            <span> Bajas unidades en inventario</span>
          </div>
        ) : null}
        <div className="inventories">
          <div className="inventory-item image-item">
            <i className="material-icons icon-inventories">
              {getFamilySymbol(Family)}
            </i>
          </div>
          <div className="inventory-item reference-item">
            <h5>Referencia</h5>
            <p>{Ref}</p>
          </div>
          <div className="inventory-item cuantities-item">
            <h5>Total</h5>
            <p>{Total}</p>
          </div>
          <div className="inventory-item detail-item">
            <button className="detail-button" onClick={handleClick}>
              Detalles
            </button>
          </div>
        </div>
      </div>
    </>
  );
});

Inventarios.propTypes = {
  Family: PropTypes.number,
  Ref: PropTypes.string,
  Marca: PropTypes.string,
  Total: PropTypes.number,
  Id_Ref: PropTypes.number,
};

export default Inventarios;

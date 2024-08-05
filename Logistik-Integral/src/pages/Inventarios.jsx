import { useNavigate } from "react-router-dom";
import { Serials } from "../Routes/RenderRoutes.jsx";
import { useContext, useEffect, useState, memo, useCallback } from "react";
import { UserType } from "../App.jsx";

import fetchRequestData from "../Services/fetch.js";
import getFamilySymbol from "../Services/getFamilySymbol.js";
import PropTypes from "prop-types";

const Inventarios = memo(function Inventarios({
  Family,
  Ref,
  Total,
  Id_Ref,
  SearchWord,
}) {
  const navigateTo = useNavigate();
  const [requestQuantity, setRequestQuantity] = useState([]);
  const [className, setClassName] = useState("inventory-container");

  const { setSerialRef } = useContext(Serials);
  const { userType } = useContext(UserType);

  useEffect(() => {
    fetchRequestData("refQuntity").then((res) => setRequestQuantity(res));
  }, []);

  const searchFilter = useCallback(() => {
    if (!Ref.toLowerCase().includes(SearchWord.toLowerCase())) {
      setClassName("hideDiv");
    } else {
      setClassName("inventory-container");
    }
  }, [Ref, SearchWord]);

  useEffect(() => {
    if (userType == "Auxiliar") {
      searchFilter();
    }
  }, [SearchWord, searchFilter, userType]);

  function handleClick() {
    setSerialRef(Ref);
    navigateTo("/inventoryDetails");
  }

  function lowInventorySymbol() {
    if (Array.isArray(requestQuantity) && requestQuantity.length > 0) {
      let refQuantity = requestQuantity.find(
        (element) => element.ref == Id_Ref
      );
      return refQuantity;
    }
  }

  return (
    <>
      <div id={className}>
        {lowInventorySymbol() != undefined &&
        lowInventorySymbol().total + 20 > Total ? (
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
  SearchWord: PropTypes.string,
};

export default Inventarios;

import { useNavigate } from "react-router-dom";
import { Serials } from "../Routes/RenderRoutes.jsx";
import { useContext } from "react";

export default function Inventarios({ Family, Ref, Marca, Total }) {
  let familySymbol;

  const navigateTo = useNavigate();

  const { setSerialRef } = useContext(Serials);

  switch (Family) {
    case 1:
      familySymbol = "computer";
      break;
    case 2:
      familySymbol = "tablet";
      break;
    default:
      familySymbol = "smartphone";
  }

  function handleClick() {
    setSerialRef(Ref);
    navigateTo("/inventoryDetails");
  }

  return (
    <>
      <div id="inventory-container">
        <div className="inventories">
          <div className="inventory-item image-item">
            <i className="material-icons icon-inventories">{familySymbol}</i>
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
}

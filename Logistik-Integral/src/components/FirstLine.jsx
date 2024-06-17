import "../styles/Inventarios.css";

import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

import Axios from "axios";

export default function FirstLine({
  buttonSpecification,
  newReferenceInfo,
  addReferencesInfo,
  setNewReferenceInfo,
}) {
  const navigateTo = useNavigate();

  function createNewReference() {
    Axios.post("http://localhost:3002/newReference", newReferenceInfo).then(
      navigateTo("/createItem"),
      setNewReferenceInfo({
        referencia: "",
        marca: "",
        valor: "",
        CPU: "",
        storage: "",
        modelo: "",
        display: "",
        bateria: "",
        familia: "",
      })
    );
  }

  return (
    <>
      <div className="inventory-firstLine">
        <div className="item-button">
          <button type="submit" onClick={createNewReference}>
            <b>{buttonSpecification}</b>
          </button>
        </div>
        <div className="dropdown-moduleOptions">
          <select
            name="familia"
            value={newReferenceInfo.familia}
            onChange={addReferencesInfo}
          >
            <option value="Categoria">Categoria</option>
            <option value="Laptop">Laptop</option>
            <option value="Smartphone">Smartphone</option>
            <option value="Tablet">Tablet</option>
          </select>
        </div>
      </div>
    </>
  );
}

FirstLine.propTypes = {
  buttonSpecification: PropTypes.string,
  newReferenceInfo: PropTypes.object,
  addReferencesInfo: PropTypes.func,
  createNewReference: PropTypes.func,
  setNewReferenceInfo: PropTypes.func,
};

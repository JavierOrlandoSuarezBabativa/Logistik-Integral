import PropTypes from "prop-types";
import "../styles/CrearItem.css";

export default function CrearItem({ newReferenceInfo, addReferencesInfo }) {
  return (
    <>
      <div id="solicitute-details-container">
        <div>
          <h4>Referencia</h4>
          <input
            className="inventory-details"
            type="text"
            value={newReferenceInfo.referencia}
            name="referencia"
            onChange={addReferencesInfo}
          />
        </div>
        <div>
          <h4>Marca</h4>
          <input
            className="inventory-details"
            type="text"
            value={newReferenceInfo.marca}
            name="marca"
            onChange={addReferencesInfo}
          />
        </div>
        <div>
          <h4>Valor</h4>
          <input
            className="inventory-details"
            type="text"
            value={newReferenceInfo.valor}
            name="valor"
            onChange={addReferencesInfo}
          />
        </div>
        <div>
          <h4>CPU</h4>
          <input
            className="inventory-details"
            type="text"
            value={newReferenceInfo.CPU}
            name="CPU"
            onChange={addReferencesInfo}
          />
        </div>
        <div>
          <h4>Storage</h4>
          <input
            className="inventory-details"
            type="text"
            value={newReferenceInfo.storage}
            name="storage"
            onChange={addReferencesInfo}
          />
        </div>
        <div>
          <h4>Modelo</h4>
          <input
            className="inventory-details"
            type="text"
            value={newReferenceInfo.modelo}
            name="modelo"
            onChange={addReferencesInfo}
          />
        </div>
        <div>
          <h4>Display</h4>
          <input
            className="inventory-details"
            type="text"
            value={newReferenceInfo.display}
            name="display"
            onChange={addReferencesInfo}
          />
        </div>
        <div>
          <h4>Bateria</h4>
          <input
            className="inventory-details"
            type="text"
            value={newReferenceInfo.bateria}
            name="bateria"
            onChange={addReferencesInfo}
          />
        </div>
      </div>
    </>
  );
}

CrearItem.propTypes = {
  newReferenceInfo: PropTypes.object,
  addReferencesInfo: PropTypes.func,
};

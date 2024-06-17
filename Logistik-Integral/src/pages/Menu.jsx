import "../styles/Menu.css";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

export default function Menu(props) {
  const navigateTo = useNavigate();
  return (
    <>
      <div id="menu-container">
        <div>
          <button id="solicitutes" onClick={() => navigateTo("/solicitudes")}>
            <i className="material-icons">pending_actions</i>
            <br />
            <p>{props.solicitute}</p>
          </button>
        </div>

        <div>
          <button id="inventories" onClick={() => navigateTo("/inventarios")}>
            <i className="material-icons">warehouse</i>
            <br />
            <p>{props.inventory}</p>
          </button>
        </div>

        <div>
          <button id="data" onClick={() => navigateTo("/registros")}>
            <i className="material-icons">receipt_long</i>
            <br />
            <p>Registros</p>
          </button>
        </div>

        <div>
          <button id="orders">
            <i className="material-icons">local_shipping</i>
            <br />
            <p>Inabilitado En desarrollo</p>
          </button>
        </div>
      </div>
    </>
  );
}

Menu.propTypes = {
  solicitute: PropTypes.string,
  inventory: PropTypes.string,
  registration: PropTypes.string,
};

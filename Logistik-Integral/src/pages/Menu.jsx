import '../styles/Menu.css'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function Menu(props){

return(
    <>
    <div id="menu-container">
      <div>
      <Link to={'/solicitudes'}>
        <button id="solicitutes">
          <i className="material-icons">pending_actions</i><br />
          <p>{props.solicitute}</p>
        </button>
      </Link>
      </div>
      <div>
      <Link to={'/inventarios'}>
        <button id="inventories">
          <i className="material-icons">warehouse</i><br />
          <p>{props.inventory}</p>
        </button>
      </Link>
      </div>
      <div>
        <button id="data">
          <i className="material-icons">receipt_long</i><br />
          <p>{props.registration}</p>
        </button>
      </div>
      <div>
        <button id="orders">
          <i className="material-icons">local_shipping</i><br />
          <p>Inabilitado En desarrollo</p>
        </button>
      </div>
    </div>
    </>
)

}

Menu.propTypes = {
  solicitute: PropTypes.string,
  inventory: PropTypes.string,
  registration: PropTypes.string
}
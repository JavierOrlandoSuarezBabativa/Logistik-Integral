import { Link } from 'react-router-dom'
import '../styles/SolicitudesDetalle.css'

export default function SolicitudesDetalle(){

return(
    <>
        <div className="solicitute-register-container">
        <div className="solicitutes-grid">
          <div>
            <i className="material-icons">smartphone <span></span></i>
          </div>
          <div>
            <h3>Referencia</h3>
            <p id="reference-solicitute">Lorem ipsum dolor</p>
          </div>
          <div>
            <h3>Cantidad</h3>
            <p id="amount-solicitute">##</p>
          </div>
        </div>
          <div id="details-buttom">
            <Link to={'/SolicitudesReceiverDetails'}>
              <button className="details-destinatary">Detalles Destinatario</button>
            </Link>
          </div>
        
      </div>
    </>
)

}
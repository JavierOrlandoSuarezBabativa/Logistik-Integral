import { Link } from 'react-router-dom'
import '../styles/GestionSolicitud.css'

export default function GestionSolicitud(){

return(
    <>
        <div className="solicitute-register-container">
        <div className="solicitutes-grid">
          <div className='grid-item'>
            <i className="material-icons">smartphone <span></span></i>
          </div>
          <div className='grid-item'>
            <h3>Referencia</h3>
            <p id="reference-solicitute">Lorem ipsum dolor</p>
          </div>
          <div className='grid-item checkbox'>
            <h3>Pendiente</h3>
           <input type="checkbox" />
          </div>
          <div className='grid-item'>
            <h3>Seriales</h3>
            <input type="text" />
            <button>+</button>
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
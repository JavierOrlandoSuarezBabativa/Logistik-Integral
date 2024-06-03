import { Link } from 'react-router-dom'
import '../styles/SolicitudesDetalle.css'

export default function SolicitudesDetalle({referencia, cantidad, marca}){


return(
    <>
        <div className="solicitute-register-container">
        <div className="solicitutes-grid">
          <div>
            <i className="material-icons">smartphone <span></span></i>
          </div>
          <div>
            <h3>Referencia</h3>
            <p id="reference-solicitute">{referencia}</p>
          </div>
          <div>
            <h3>Cantidad</h3>
            <p id="amount-solicitute">{cantidad}</p>
          </div>
        </div>
          <div id="details-buttom">
              {/* <button className="details-destinatary">Detalles Destinatario</button> */}
              <h3>{marca}</h3>
          </div>
        
      </div>
    </>
)

}
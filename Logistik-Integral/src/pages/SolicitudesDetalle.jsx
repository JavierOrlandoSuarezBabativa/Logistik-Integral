import '../styles/SolicitudesDetalle.css'
import PropTypes from 'prop-types'
import getFamilySymbol from '../Services/getFamilySymbol.js'

export default function SolicitudesDetalle({referencia, cantidad, marca, familia}){

  const symbol = getFamilySymbol(familia) 

  return(
      <>
      <div className="solicitute-register-container">

        <div id="brand">
          <h2>{marca}</h2>
        </div>

        <div className="solicitutes-grid">
          <div>
            <i className="material-icons">{symbol}<span></span></i>
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

      </div>
      </>
  )

}

SolicitudesDetalle.propTypes = {
  referencia: PropTypes.string,
  cantidad: PropTypes.number,
  marca: PropTypes.string,
  familia: PropTypes.number
}
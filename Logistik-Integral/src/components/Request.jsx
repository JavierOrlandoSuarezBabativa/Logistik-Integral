import PropTypes from 'prop-types'

import Serials from "./Serials.jsx"

export default function Request ({referencia, cantidad, serials, idRef}) { 

  let serialsRef;

  if (serials != undefined) {
    serialsRef = serials.filter((serialsObject) => serialsObject.id_Ref == idRef)
  }

    return (
        <>
        <div className="solicitute-register-container">
        <div className="solicitutes-grid">
          <div className='grid-item'>
            {cantidad} - Cantidad
          </div>
          <div className='grid-item'>
            <h3>Referencia</h3>
            <p id="reference-solicitute">{referencia}</p>
          </div>
          <div className='grid-item checkbox'>
            <h3>Estado</h3>
           <input type="checkbox" />
          </div>
          <div className='grid-item'>
            {serialsRef != undefined && serialsRef.map(({id_Serial, Serial}) => {
                                            return <Serials
                                                      key={id_Serial}
                                                      idSerial={id_Serial}
                                                      serial={Serial}
                                                      />
            })}
          </div>
        </div>
      </div>
        </>
    )
}

Request.propTypes = {
  referencia: PropTypes.string,
  cantidad: PropTypes.number,
  serials: PropTypes.array,
  idRef: PropTypes.number
}
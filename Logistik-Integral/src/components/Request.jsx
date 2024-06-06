import PropTypes from 'prop-types'
import Serials from "./Serials.jsx"
import {useRef, useState } from 'react'

export default function Request ({referencia, cantidad, serials, idRef}) {
  
  const [checkBoxStatus, setCheckBoxStatus] = useState(false)

  let count = useRef(0)
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
           {checkBoxStatus ? <input type="checkbox" checked/> : <input type="checkbox"/>}
          </div>

          <div className='grid-item'>
            {serialsRef != undefined && serialsRef.map(({
                                                          id_Serial, 
                                                          Serial
                                                        }) => {
                                                                return <Serials
                                                                          key={id_Serial}
                                                                          idSerial={id_Serial}
                                                                          serial={Serial}
                                                                          setCheckBoxStatus={setCheckBoxStatus}
                                                                          cantidad={cantidad}
                                                                          count={count}
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
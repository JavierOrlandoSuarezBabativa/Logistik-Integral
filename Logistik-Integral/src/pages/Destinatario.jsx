import '../styles/Destinatario.css'
import Axios from 'axios'

import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'
import UseAddDetails from '../dinamicHooks/UseAddDetails.jsx'

// import Observaciones from '../components/Observaciones.jsx'


export default function Destinatario({requestRefs}){

    const navigateTo = useNavigate()

    const {newDetailsInfo, addDetailsInfo} = UseAddDetails()

    function createRequestInfo() {
        for(let i = 0; i < requestRefs.length; i++){
            Axios.post('http://localhost:3002/solicitud', requestRefs[i])
            .then(console.log(requestRefs[i]))
        }
    }

    function createRequests(){
        Axios.post('http://localhost:3002/detalles', newDetailsInfo)
        .then(
                createRequestInfo(),
                navigateTo('/cliente'))
      }

    return(
        <>
            <div id="solicitute-details-container">
                <div>
                    <h4>Nombre</h4>
                    <input name='nombre' className="data-details" onChange={addDetailsInfo}/>
                </div>
                <div>
                    <h4>Apellido</h4>
                    <input name='apellido' className="data-details" onChange={addDetailsInfo}/>
                </div>
                <div>
                    <h4>Cedula</h4>
                    <input name='cedula' className="data-details" onChange={addDetailsInfo}/>
                </div>
                <div>
                    <h4>Telefono</h4>
                    <input name='telefono' className="data-details" onChange={addDetailsInfo}/>
                </div>
                <div>
                    <h4>Direccion</h4>
                    <input name='direccion' className="data-details" onChange={addDetailsInfo}/>
                </div>
                <div>
                    <h4>Ciudad</h4>
                    <input name='ciudad' className="data-details" onChange={addDetailsInfo}/>
                </div>
                <div>
                    <details>
                        <summary>Observaciones</summary>
                        <textarea name="observaciones" className="data-details" rows='5' onChange={addDetailsInfo}></textarea>
                    </details>
                </div>
            </div>
            {/* <Observaciones/> */}
            <button
                style={{
                        display: 'flex',
                        margin: '0px auto'
                        }}
                onClick={createRequests}>Enviar Solicitud</button>
        </>
    )
}

Destinatario.propTypes = {
    requestRefs: PropTypes.array
}
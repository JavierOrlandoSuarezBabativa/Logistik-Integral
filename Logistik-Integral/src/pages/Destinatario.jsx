import '../styles/Destinatario.css'

import PropTypes from 'prop-types'

import UseAddDetails from '../dinamicHooks/UseAddDetails.jsx'

import Axios from 'axios'

export default function Destinatario({requestRefs}){

    const {newDetailsInfo, addDetailsInfo} = UseAddDetails()

    function createRequestInfo() {
        for(let i = 0; i < requestRefs.length; i++){
            Axios.post('http://localhost:3002/solicitud', requestRefs[i])
            .then(console.log(requestRefs[i]))
        }
    }

    function createRequests(){
        Axios.post('http://localhost:3002/detalles', newDetailsInfo)
        .then(createRequestInfo())
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
            </div>
            <button onClick={createRequests}>crear</button>
        </>
    )
}

Destinatario.propTypes = {
    requestRefs: PropTypes.array
}
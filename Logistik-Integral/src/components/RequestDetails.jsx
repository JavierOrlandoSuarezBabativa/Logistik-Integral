import '../styles/Solicitudes.css'

import { useNavigate } from "react-router-dom"
import { UserType } from "../App"
import { useContext } from "react"

import PropTypes from 'prop-types'


export default function RequestDetails ({id, status, observations, date, request, setRequestId}) {

    const {userType} = useContext(UserType)

    const navigateTo = useNavigate()

    let dateFormat = date.slice(0, date.indexOf("T"));

    return(
        <>
        <div className="solicitutes-container">
            <div className="register-container">

                <div className="estatus-register register-container-item">
                    <h4>Estado</h4>
                    <p>{status}</p>
                </div>

                <div className="observations-register register-container-item">
                    <h4>Observaciones</h4>
                    <p id="observaciones">{observations}</p>
                </div>

                <div className="date-register register-container-item">
                    <h4>Fecha</h4>
                    <p>{dateFormat}</p>
                </div>

                <div className="id-register register-container-item">
                    <h4>Solicitud</h4>
                    <p>{request}</p>
                </div>

                <div className="details-register register-container-item">
                    <button onClick={() => {
                        setRequestId(id)
                        navigateTo('/solicitudesButton')
                        }}>{userType == 'Administrador' ? 'Detalles Solicitud' : 'Gestionar'}</button>
                </div>
            </div>
        </div>

        </>
    )
}

RequestDetails.propTypes = {
    id: PropTypes.number,
    status: PropTypes.string,
    observations: PropTypes.string,
    date: PropTypes.string,
    request: PropTypes.string,
    setRequestId: PropTypes.func
}
import { useNavigate } from "react-router-dom"

import '../styles/Solicitudes.css'

export default function RequestDetails ({status, observations, date, request}) {

    const navigateTo = useNavigate()

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
                    <p>{date}</p>
                </div>

                <div className="id-register register-container-item">
                    <h4>Solicitud</h4>
                    <p>{request}</p>
                </div>

                <div className="details-register register-container-item">
                    <button onClick={() => navigateTo('/solicitudesButton')}>Gestionar</button>
                </div>
            </div>
        </div>

        </>
    )
}
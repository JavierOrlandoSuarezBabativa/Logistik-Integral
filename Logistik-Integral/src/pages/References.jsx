import '../styles/Solicitudes.css'
import { Link } from 'react-router-dom'

export default function References({modulo, referencia, marca, modelo, hash, setSingleRef}){


    function getRefID () {
        setSingleRef(hash)
    }

    

    return(
        <>
        <Link to={`/id`} className="solicitutes-container">
            <div className="register-container">

                <div className="estatus-register register-container-item">
                    <h4>Familia</h4>
                    <p>{modulo}</p>
                </div>

                <div className="observations-register register-container-item">
                    <h4>Referencia</h4>
                    <p id="observaciones">{referencia}</p>
                </div>

                <div className="date-register register-container-item">
                    <h4>Marca</h4>
                    <p>{marca}</p>
                </div>

                <div className="id-register register-container-item">
                    <h4>Modelo</h4>
                    <p>{modelo}</p>
                </div>

                <div className="details-register register-container-item">
                    <button onClick={getRefID}>xxxx</button>
                </div>
            </div>
        </Link>
        </>
    )
}
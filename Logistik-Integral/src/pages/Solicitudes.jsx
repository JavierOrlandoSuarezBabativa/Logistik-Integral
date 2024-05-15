import '../styles/Solicitudes.css'
import { UserType } from '../App'
import { useContext } from 'react'
import { Link } from 'react-router-dom'

export default function Solicitudes(props){

const {userType} = useContext(UserType)

return(
    <>
        <div className="solicitutes-container">
            <div className="register-container">

                <div className="estatus-register register-container-item">
                    <h4>Estado</h4>
                    <p>Lorem ipsum</p>
                </div>

                <div className="observations-register register-container-item">
                    <h4>Observaciones</h4>
                    <p id="observaciones">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem.</p>
                </div>

                <div className="date-register register-container-item">
                    <h4>Fecha</h4>
                    <p>00/00/00</p>
                </div>

                <div className="id-register register-container-item">
                    <h4>ID</h4>
                    <p>*******</p>
                </div>

                <Link to={'/solicitudesButton'}>
                <div className="details-register register-container-item">
                    {userType === 'Cliente' ?  null : <button>{props.button}</button>}
                </div>
                </Link>
            </div>
        </div>
    </>
)

}
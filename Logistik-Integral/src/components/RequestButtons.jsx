import PropTypes from 'prop-types'
import { useNavigate, Link } from 'react-router-dom'

export default function RequestButtons ({setAddRef, addRef}) {

    const navigateTo = useNavigate()

    function handleClick () {
        let array = [...addRef, []]
        setAddRef(array)
    }

    return(
        <>
        <div className="div-confirmation-button">
            <button 
                id="add-reference"
                onClick={handleClick}>Agregar Referencia</button>
        </div>
        <div className="div-confirmation-button">
            <Link to={'receiverDetails'}>
            <button
                id="confirmation-button"
                >Detalles de envio</button>4
            </Link>
        </div>
        </>
    )
}

RequestButtons.propTypes = {
    setAddRef: PropTypes.func,
    addRef: PropTypes.array ,

}
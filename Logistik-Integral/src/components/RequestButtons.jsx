import PropTypes from 'prop-types'

export default function RequestButtons ({setAddRef, addRef, setShowReceiverDetails, setAddReference}) {

    function handleClick () {
        let array = [...addRef, []]
        setAddRef(array)
    }

    function handleSecondClick() {
        setAddReference(false)
        setShowReceiverDetails(true)
    }

    return(
        <>
        <div className="div-confirmation-button">
            <button 
                id="add-reference"
                onClick={handleClick}>Agregar Referencia</button>
        </div>

        <div className="div-confirmation-button">
        <button 
                id="add-reference"
                onClick={handleSecondClick}>Destinatario</button>
        </div>
        </>
    )
}

RequestButtons.propTypes = {
    setAddRef: PropTypes.func,
    addRef: PropTypes.array,
    setShowReceiverDetails: PropTypes.func,
    setAddReference: PropTypes.func
}
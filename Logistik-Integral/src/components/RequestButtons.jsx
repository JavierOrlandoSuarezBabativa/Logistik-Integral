import PropTypes from 'prop-types'

export default function RequestButtons ({setAddRef, addRef}) {

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
        </>
    )
}

RequestButtons.propTypes = {
    setAddRef: PropTypes.func,
    addRef: PropTypes.array ,

}
import PropTypes from 'prop-types'

export default function SerialInput ({inputNum, setSeriales}) {

    const divInputStyles = {
        margin: '5px auto',
        div: {
            display: 'flex',
            justifyContent: 'center'
            }
    }

    function handleSerial (event) {
        const {value, name} = event.target
        setSeriales(prevSeriales => ({
            ...prevSeriales,
            [name]: value
            })
        )
    }
     
    return(
        <>
        <div style={divInputStyles.div}>
            <input
                style={divInputStyles} 
                name={`input${inputNum}`} 
                type="text" placeholder="Ingresar serial usando MAYUSCULAS" 
                onChange={handleSerial}/>
        </div>
        </>
    )
}

SerialInput.propTypes = {
    inputNum: PropTypes.number,
    setSeriales: PropTypes.func
}
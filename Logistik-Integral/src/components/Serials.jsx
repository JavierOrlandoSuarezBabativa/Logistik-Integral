import Axios from 'axios'
import { useState } from 'react'
import PropTypes from 'prop-types'

export default function Serial ({idSerial, serial, setCheckBoxStatus, cantidad, count}) {

    const [backgroundColor, setBackgroundColor] = useState(null)

    let back = {
                backgroundColor: backgroundColor
                }
    
    function deleteSerial () {
        setBackgroundColor('red')
        keepCount()
        Axios.delete(`http://localhost:3002/ser/${idSerial}`)
    }

    function keepCount () {
        count.current = count.current + 1
        if(count.current == cantidad) {
            setCheckBoxStatus(true)
        }
    }
    
    return <div
            style={back}
            onClick={deleteSerial}
            >{serial}</div>
}

Serial.propTypes = {
    idSerial: PropTypes.number,
    serial: PropTypes.string,
    setCheckBoxStatus: PropTypes.func,
    cantidad: PropTypes.number,
    count: PropTypes.number
}
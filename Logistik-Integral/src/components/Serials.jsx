import Axios from 'axios'
import { useState } from 'react'
import PropTypes from 'prop-types'

import getDate from '../Services/getDate.js'

export default function Serial ({idSerial, serial, setCheckBoxStatus, cantidad, count, setShowSerialsDiv, referencia, marca}) {

  

    const [display, setDisplay] = useState('flex')

    let divStyles = {
                display: display,
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: '12px',
                fontSize: '1rem',
                border: '1px solid #000',
                borderRadius: '15px',
                width: '85vw',
                height: '2rem',
                backgroundColor: '#9d9da6',
                letterSpacing: '3px',
                }

    function keepCount () {
        count.current = count.current + 1
        if(count.current == cantidad) {
            setCheckBoxStatus(true)
            setShowSerialsDiv(false)
        }
    }


    let newToRegister = {brand: marca, ref: referencia, serial: serial, date: getDate()}

    function deleteSerial () {
        setDisplay('none')
        keepCount()
        Axios.post('http://localhost:3002/salidas', newToRegister)
        .then(Axios.delete(`http://localhost:3002/ser/${idSerial}`))
    }

        return <div style={divStyles} onClick={deleteSerial}>{serial}</div>
        
    }

Serial.propTypes = {
    idSerial: PropTypes.number,
    serial: PropTypes.string,
    setCheckBoxStatus: PropTypes.func,
    cantidad: PropTypes.number,
    count: PropTypes.object,
    setShowSerialsDiv: PropTypes.func
}
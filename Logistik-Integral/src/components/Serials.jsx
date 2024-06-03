import Axios from 'axios'
import { useState } from 'react'

export default function Serial ({idSerial, serial}) {

    const [backgroundColor, setBackgroundColor] = useState(null)

    let back = {
        backgroundColor: backgroundColor
    }

    console.log(idSerial)     
    function deleteSerial () {
        Axios.delete(`http://localhost:3002/ser/${idSerial}`)
        setBackgroundColor('red')
    }
    

    return <div 
            style={back} 
            onClick={deleteSerial}
            >{serial}</div>
}
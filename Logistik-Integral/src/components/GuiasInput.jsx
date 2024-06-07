import { useState } from "react"
import Axios from 'axios'


export default function GuiasInput({receiverId}){

    const [guia, setGuia] = useState(null)


    function getInputValue (event) {
        setGuia(event.target.value)
    }

    function updateRequest () {
        Axios.put(`http://localhost:3002/ReceiverInfo/${receiverId}`, {guia: guia})
        .then(Axios.put(`http://localhost:3002/RequestsData/${receiverId}`))
        .then(console.log('mas que ok'))
    }

    return(

        <>
        <div id='guiasInput'>
            <input
                style={{textAlign: 'center'}}
                type="text"
                value={guia}
                onChange={getInputValue}/>
            {/* <button>+</button> */}
            <button
                id='confirmationButton'
                onClick={updateRequest}>Confirmar</button>
        </div>
        </>

    )

}
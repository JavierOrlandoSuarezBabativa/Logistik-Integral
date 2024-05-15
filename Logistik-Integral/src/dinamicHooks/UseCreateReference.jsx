import { useState } from "react"

export default function UseCreateReference () {


    const [newReferenceInfo, setNewReferenceInfo] = useState({
        referencia: '',
        marca: '',
        valor: '',
        CPU: '',
        storage: '',
        modelo: '',
        display: '',
        bateria: '',
        familia: ''
    })

    function addReferencesInfo (event) {
        const {name, value} = event.target
        setNewReferenceInfo(prevNewReferenceInfo => ({
            ...prevNewReferenceInfo,
            [name]: value
        }))
    }


    return {newReferenceInfo, addReferencesInfo, setNewReferenceInfo}
}
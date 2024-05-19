import { useState } from "react"

export default function UseCreateNewMachine () {

    const [newReference, setNewReference] = useState({
        familia: '',
        referencia: '',
        marca: '',
        modelo: '',
    })

    function addNewReferences (event) {
        const {name, value} = event.target
        setNewReference(prevNewReference => ({
            ...prevNewReference,
            [name]: value
        }))
    }


    return {newReference, addNewReferences, setNewReference}
}
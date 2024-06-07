import { useState } from "react"

export default function UseAddDetails () {


    const [newDetailsInfo, setNewDetailsInfo] = useState({
        nombre: '',
        apellido: '',
        cedula: '',
        telefono: '',
        direccion: '',
        ciudad: '',
        observaciones: ''
    })

    function addDetailsInfo (event) {
        const {name, value} = event.target
        setNewDetailsInfo(prevdetailsInfo => ({
            ...prevdetailsInfo,
            [name]: value
        }))
    }


    return {newDetailsInfo, addDetailsInfo, setNewDetailsInfo}
}
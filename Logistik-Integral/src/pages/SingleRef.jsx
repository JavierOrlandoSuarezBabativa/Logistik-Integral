import { Refs } from "../App"
import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import SerialInput from "../components/SerialInput.jsx"
import References from "./References.jsx"
import getDate from "../Services/getDate.js"
import axios from 'axios'

export default function SingleRef () {

    const divButtonStyles = {
        margin: '5px auto',
        div: {
            display: 'flex',
            justifyContent: 'center'
            }
    }

    const {referencesData, singleRef} = useContext(Refs)
    
    const [inputs, setInput] = useState([])
    const [inputNum, setInputNum] = useState(0)
    const [seriales, setSeriales] = useState({})

    const navigateTo = useNavigate()

    const serialesArray = Object.values(seriales)

    const uniqueRef = referencesData.find((ref) => {
        return ref.Id_Referencia == singleRef
    })

    function createCantidad(){
        axios.post("http://localhost:3002/cantidad", {
            newRef: uniqueRef.Id_Referencia,
            newCantidad: inputNum,
            newDate: getDate()
        }).then(
            createSeriales(),
            navigateTo('/reception')

        )
    }

    function createSeriales(){
        for(let i = 0; i < inputs.length; i++){
            axios.post("http://localhost:3003/seriales", {
                newRef: uniqueRef.Id_Referencia,
                newSerial: serialesArray[i]
            }).then(
            )   
        }
    }

    function addinput () {
        const array = [...inputs, []]
        setInput(array) 
        setInputNum(previnputNum => previnputNum + 1)
    }

        return(
            <>
            <References 
                hash={uniqueRef.Id_Referencia}
                referencesFiltered={uniqueRef.referencesFiltered}
                key={uniqueRef.Id_Referencia}
                valor={uniqueRef.Valor}
                modulo = {uniqueRef.Modulos_Id_Modulo}
                pulgadas={uniqueRef.Pulgadas}
                storage={uniqueRef.Storage}
                referencia = {uniqueRef.Referencia_Equipo}
                marca = {uniqueRef.Marca}
                modelo = {uniqueRef.Modelo}
                buttonDetail={'Agregar Serial'}
                setSingleRef = {addinput}
            />

            {inputs.map((input, index)=>{
                                    return <SerialInput
                                                key={index} 
                                                inputNum={inputNum} 
                                                setSeriales={setSeriales} 
                                                seriales={seriales}
                                            />})}

            <div style={divButtonStyles.div}>
                <button 
                    style={divButtonStyles} 
                    onClick={createCantidad}
                    >Actualizar Inventario</button>
            </div>
            </>
        )
}
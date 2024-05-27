import References from "./References"
import { Refs } from "../App"
import { useContext, useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import SerialInput from "../components/SerialInput.jsx"
import axios from 'axios'

export default function SingleRef () {

    const {referencesData, singleRef} = useContext(Refs)
    // esta pendiente por usar en un futuro
    const [refQuantities, setRefQuantities] = useState([])

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
            newCantidad: inputNum
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

    async function fetchReferencesQuantity() {
        try{
            const res = await axios('http://localhost:3003/')
            setRefQuantities(res.data)
        }catch (err) {
            console.log(err)
        }
    }

    useEffect(()=>{
        fetchReferencesQuantity()
    },[])

    function addinput () {
        const array = [...inputs, []]
        setInput(array) 
        setInputNum(previnputNum => previnputNum + 1)
    }

        return(
            <>
                <References hash={uniqueRef.Id_Referencia}
                            referencesFiltered={uniqueRef.referencesFiltered}
                            key={uniqueRef.Id_Referencia}
                            modulo = {uniqueRef.Modulos_Id_Modulo}
                            referencia = {uniqueRef.Referencia_Equipo}
                            marca = {uniqueRef.Marca}
                            modelo = {uniqueRef.Modelo}
                            setSingleRef = {addinput}/>
                {inputs.map((input, index)=>{
                    return <SerialInput key={index} inputNum={inputNum} setSeriales={setSeriales} seriales={seriales}/>
                })}
                <button onClick={createCantidad}>Crear Referencias</button>
            </>
        )
}
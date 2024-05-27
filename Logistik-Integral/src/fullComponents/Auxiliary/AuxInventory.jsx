import Header from "../../components/Header.jsx"
import ButtonReception from '../../components/ButtonReception.jsx'
import Inventarios from '../../pages/Inventarios.jsx'
import { useState, useEffect } from "react"
import fetchRefQuantity from "../../fetch/fetchRefQuantity.js"

export default function AuxInventoty(){

    const [quantities, setQuantities] = useState([])

    useEffect(() => {
        fetchRefQuantity()
        .then(quantity => setQuantities(quantity))
    }, [])


    return(
        <>
        <Header page='Inventario'></Header>
        <ButtonReception value='Recepcion'/>
        {quantities.map(({Family, Ref, Marca, Total}) => {
            return <Inventarios
                        key={Ref} 
                        Family={Family} 
                        Ref={Ref} 
                        Marca={Marca}
                        Total={Total}/>
        })}
        </>
    )
}
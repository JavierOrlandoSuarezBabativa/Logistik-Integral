import Header from "../../components/Header.jsx"
import ButtonReception from '../../components/ButtonReception.jsx'
import Inventarios from '../../pages/Inventarios.jsx'
import fetchRefQuantity from "../../fetch/fetchRefQuantity.js"
import { useEffect, useState } from "react"

export default function AdminInventory(){

    const [quantities, setQuantities] = useState([])

    useEffect(() => {
        fetchRefQuantity()
        .then(quantity => setQuantities(quantity))
    }, [])

    

    return(
        <>
        <Header page='Inventario'></Header>
        <ButtonReception value='Crear Item'></ButtonReception>
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
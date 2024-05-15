import Header from "../../components/Header.jsx"
import ButtonReception from '../../components/ButtonReception.jsx'
import Inventarios from '../../pages/Inventarios.jsx'

export default function AdminInventory(){

    return(
        <>
        <Header page='Inventario'></Header>
        <ButtonReception value='Crear Item'></ButtonReception>
        <Inventarios></Inventarios>
        </>
    )
}
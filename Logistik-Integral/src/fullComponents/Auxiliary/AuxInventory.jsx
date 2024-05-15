import Header from "../../components/Header.jsx"
import ButtonReception from '../../components/ButtonReception.jsx'
import Inventarios from '../../pages/Inventarios.jsx'

export default function AuxInventoty(){


    return(
        <>
        <Header page='Inventario'></Header>
        <ButtonReception value='Recepcion'/>
        <Inventarios></Inventarios>
        </>
    )
}
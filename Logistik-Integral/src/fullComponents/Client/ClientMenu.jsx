import Header from "../../components/Header.jsx"
import Menu from "../../pages/Menu.jsx"

export default function ClientMenu(){

    return(
        <>
        <Header user='Cliente'/>
        <Menu solicitute='Hacer Solicitud' inventory='Inventario Disponible' registration='Inhabilitado En Desarrollo'></Menu>
        </>
    )
}
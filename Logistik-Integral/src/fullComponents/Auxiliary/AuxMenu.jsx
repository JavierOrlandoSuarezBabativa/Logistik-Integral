import Header from "../../components/Header.jsx"
import Menu from "../../pages/Menu.jsx"

export default function AuxMenu(){

    return(
        <>
        <Header user='Auxiliar'/>
        <Menu solicitute='Solicitudes Pendientes' inventory='Inventario Almacen'></Menu>
        </>
    )
}
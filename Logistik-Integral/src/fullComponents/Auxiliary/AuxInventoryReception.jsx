import Header from "../../components/Header.jsx"
import NewItemTitle from "../../pages/NewItemTitle.jsx"
import NewItemReception from "../../pages/NewItemReception.jsx"


export default function AuxInventoryReception(){

    return(
        <>
        <Header page='Recepcion de equipos'></Header>
        <NewItemTitle
            buttonSpecification='Guardar'/>
        <NewItemReception/>
        </>
    )
}
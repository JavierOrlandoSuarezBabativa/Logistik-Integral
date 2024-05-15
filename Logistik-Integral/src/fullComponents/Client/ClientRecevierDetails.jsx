import Header from "../../components/Header.jsx"
import Destinatario from '../../pages/Destinatario.jsx'
import Button from '../../components/ButtonReception.jsx.jsx'

export default function ClientReceiverDetails(){

    return(
        <>
        <Header page='Detalles Destinatario'></Header>
        <Destinatario></Destinatario>
        <Button value='Crear'></Button>
        </>
    )
}
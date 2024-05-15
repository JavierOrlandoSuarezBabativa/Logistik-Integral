import Header from "../../components/Header.jsx"
import Destinatario from '../../pages/Destinatario.jsx'
import GuiasInput from '../../components/GuiasInput.jsx'


export default function AuxReceiverDetails(){

    return(
        <>
        <Header page='Detalles Destinatario'></Header>
        <Destinatario></Destinatario>
        <GuiasInput></GuiasInput>
        </>
    )
}
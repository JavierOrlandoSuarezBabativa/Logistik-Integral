import Header from "../../components/Header.jsx"
import Destinatario from "../../pages/Destinatario.jsx"
import CrearSolicitud from '../../components/CrearSolicitud.jsx'

export default function CreateSolicitute () {


    return(
        <>
        <Header user='Nueva Solicitud'></Header>
        <Destinatario></Destinatario>
        <CrearSolicitud></CrearSolicitud>
        </>
    )
}
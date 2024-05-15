import Header from "../../components/Header.jsx"
import FirstLine from '../../components/FirstLine.jsx'
import Solicitutes from '../../pages/Solicitudes.jsx'

export default function ClientCreateRequest(){

    return(
        <>
        <Header user='Crear Solicitud'/>
        <FirstLine buttonSpecification='Crear'></FirstLine>
        <Solicitutes button='Detalles'></Solicitutes>
        </>
    )
}
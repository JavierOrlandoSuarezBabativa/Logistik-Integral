import Header from '../../components/Header.jsx'
import SolicitudesDetalle from '../../pages/SolicitudesDetalle.jsx'

import { RequestId } from '../../App.jsx'
import { useContext, useEffect, useState } from 'react'

import fetchRequests from '../../fetch/fetchRequests.js'

export default function AdminSolicitutesDetails(){

    const {requestId} = useContext(RequestId)

    const [requestInfo, setRequestInfo] = useState()

    useEffect(() => {
        fetchRequests()
        .then(res => setRequestInfo(res))
    }, [])

    let singleRequest;

    if (requestInfo) singleRequest = requestInfo.filter((singleObj) => singleObj.IdDestinatario == requestId)

    console.log(singleRequest)

    return(
        <>
        <Header page='Solicitud N°XXX'></Header>
        {singleRequest && singleRequest.map(({Id, Referencia, Cantidad, Marca}) => {
            return <SolicitudesDetalle
                        key={Id}
                        referencia={Referencia}
                        cantidad={Cantidad}
                        marca={Marca}
                        />
        })}
        </>
    )
}
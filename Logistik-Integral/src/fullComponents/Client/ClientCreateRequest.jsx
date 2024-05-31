import Header from "../../components/Header.jsx"
import Solicitud from "../../components/CrearSolicitud.jsx"
import RequestButtons from "../../components/RequestButtons.jsx"
import Destinatario from "../../pages/Destinatario.jsx"

import {useEffect, useState } from "react"
import UseGetRequestRefs from "../../dinamicHooks/UseGetRequestRefs.jsx"

import fetchDetailsId from "../../fetch/fetchDetailsId.js"

export default function ClientCreateRequest(){

    const {requestRefs, setRequestRefs} = UseGetRequestRefs()

    const [addRef, setAddRef] = useState([])
    const [detailsId, setDetailsId] = useState()

    useEffect(() => {
        fetchDetailsId()
        .then(details => setDetailsId(details))
    }, [])

    return(
        <>
        <Header user='Crear Solicitud'/>
        {addRef.map((singleAddRef, index) => {
            return <Solicitud
                        key={index}
                        requestRefs={requestRefs}
                        setRequestRefs={setRequestRefs}
                        detailsId={detailsId}/>
        })}
        <RequestButtons
            setAddRef={setAddRef}
            addRef={addRef}/>
        <Destinatario requestRefs={requestRefs}/>
        </>
    )
}
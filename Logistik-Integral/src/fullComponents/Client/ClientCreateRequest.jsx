import Header from "../../components/Header.jsx"
import Solicitud from "../../components/CrearSolicitud.jsx"
import RequestButtons from "../../components/RequestButtons.jsx"

import {useState } from "react"
import UseGetRequestRefs from "../../dinamicHooks/UseGetRequestRefs.jsx"

export default function ClientCreateRequest(){

    const {requestRefs, setRequestRefs} = UseGetRequestRefs()

    const [addRef, setAddRef] = useState([])

    console.log(requestRefs)

    return(
        <>
        <Header user='Crear Solicitud'/>
        {addRef.map((singleAddRef, index) => {
            return <Solicitud
                        key={index}
                        requestRefs={requestRefs}
                        setRequestRefs={setRequestRefs}
                        />
        })}
        <RequestButtons
            setAddRef={setAddRef}
            addRef={addRef}/>
        </>
    )
}
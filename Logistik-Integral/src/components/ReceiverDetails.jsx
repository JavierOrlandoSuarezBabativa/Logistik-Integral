import { useEffect, useState } from "react"
import fetchreceiverInfo from "../fetch/fetchReceiverInfo.js"

export default function ReceiverDetails ({receiverId}) {

    const [info, setInfo] = useState()
    
    useEffect(() => {
        fetchreceiverInfo()
        .then(res => setInfo(res))
    }, [])

    let singleInfo;

    if (info) singleInfo = info.filter((infoDetail) => infoDetail.Id_Destinatario == receiverId)

    return(
        <>
            {singleInfo && <div id="solicitute-details-container">
                <div>
                    <h4>Nombre</h4>
                    <div name='nombre' className="data-details">{singleInfo[0].Nombres}</div>
                </div>
                <div>
                    <h4>Apellido</h4>
                    <div name='apellido' className="data-details">{singleInfo[0].Apellidos}</div>
                </div>
                <div>
                    <h4>Cedula</h4>
                    <div name='cedula' className="data-details">{singleInfo[0].Cedula}</div>
                </div>
                <div>
                    <h4>Telefono</h4>
                    <div name='telefono' className="data-details">{singleInfo[0].Telefono}</div>
                </div>
                <div>
                    <h4>Direccion</h4>
                    <div name='direccion' className="data-details">{singleInfo[0].Direccion}</div>
                </div>
                <div>
                    <h4>Ciudad</h4>
                    <div name='ciudad' className="data-details">{singleInfo[0].Ciudad}</div>
                </div>
            </div>}
        </>
    )
}
import References from "./References"
import { Refs } from "../App"
import { useContext } from "react"

export default function SingleRef () {

    const {referencesData, singleRef} = useContext(Refs)

    const uniqueRef = referencesData.find((ref) => {
        return ref.Id_Referencia == singleRef
    })

    console.log(uniqueRef.Id_Referencia)

    function hola () {
        console.log('Hola mundo')
    }

        return(
            <>
                <References hash={uniqueRef.Id_Referencia}
                            referencesFiltered={uniqueRef.referencesFiltered}
                            key={uniqueRef.Id_Referencia}
                            modulo = {uniqueRef.Modulos_Id_Modulo}
                            referencia = {uniqueRef.Referencia_Equipo}
                            marca = {uniqueRef.Marca}
                            modelo = {uniqueRef.Modelo}
                            setSingleRef = {hola}/>
            </>
        )
}
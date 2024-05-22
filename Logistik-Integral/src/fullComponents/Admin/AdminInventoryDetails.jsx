import { useContext, useEffect, useState } from "react"
import Header from "../../components/Header.jsx"
import Serial from '../../components/SerialList.jsx'
import fetchSeriales from "../../fetch/fetchSeriales.js"
// import { Serials } from "../../App.jsx"

export default function AdminInventoryDetails(){

    const [seriales, setSeriales] = useState([])

    // no se esta utilizando
    // const {serialRef} = useContext(Serials)

    useEffect(() => {
        fetchSeriales()
        .then(serial => setSeriales(serial))
    },[])


    return(
        <>
        <Header page='Referencia N° xxxxxxxxxxxx'></Header>
        {seriales.map((singleSerial, index) => {
            return <Serial 
                        key={index} 
                        id={singleSerial.id} 
                        serial={singleSerial.Serial}></Serial>
        })}
        </> 
    )
}
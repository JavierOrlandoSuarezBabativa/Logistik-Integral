import Header from "../../components/Header.jsx"
import NewItemTitle from "../../pages/NewItemTitle.jsx"
import References from "../../pages/References.jsx"
import Axios from 'axios'
import React, { useState, useEffect, useContext } from "react"
import { Refs } from "../../App.jsx"
import UseCreateNewMachine from "../../dinamicHooks/UseCreateNewMachine.jsx"
// import fetchReferences from "../../fetch/fetchReferences.js"

export const MachineFamily = React.createContext()

export default function AuxInventoryReception(){


    const {referencesData, setReferencesData, setSingleRef} = useContext(Refs)

    const [machineFamily, setMachineFamily] = useState('')

    const {newReference, addNewReferences} = UseCreateNewMachine()

    const referencesFiltered = referencesData.filter((ref) => {
        return ref.Modulos_Id_Modulo == machineFamily
    })

    async function fetchReferencias() {
        try{
            const res = await Axios('http://localhost:3002/sqlReferencias')
            setReferencesData(res.data)
        }catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        fetchReferencias()
    }, [])




    return(
        <MachineFamily.Provider value={{setMachineFamily, referencesFiltered}}>

        <Header
            page='Recepcion de equipos'
        />

        <NewItemTitle
            newReference={newReference}
            addNewReferences={addNewReferences}
        />

        {referencesFiltered.map(({
                                    Valor,  
                                    Referencia_Equipo,
                                    Marca, 
                                    Modelo,
                                    Id_Referencia,
                                    Storage,
                                    Pulgadas
                                }) => {
                                        return  <References
                                                hash={Id_Referencia}
                                                storage={Storage}
                                                pulgadas={Pulgadas}
                                                key={Id_Referencia}
                                                valor = {Valor}
                                                referencia = {Referencia_Equipo}
                                                marca = {Marca}
                                                modelo = {Modelo}
                                                setSingleRef = {setSingleRef}
                                                buttonDetail = {'Ingresar Unidades'}
                                                />
                                        })}

        </MachineFamily.Provider>
    )
}


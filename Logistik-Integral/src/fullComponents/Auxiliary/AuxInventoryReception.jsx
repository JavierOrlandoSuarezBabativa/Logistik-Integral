import Header from "../../components/Header.jsx"
import NewItemTitle from "../../pages/NewItemTitle.jsx"
import References from "../../pages/References.jsx"
import Axios from 'axios'
import React, { useState, useEffect, useContext } from "react"
import UseCreateNewMachine from "../../dinamicHooks/UseCreateNewMachine.jsx"
import { Refs } from "../../App.jsx"


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
    },[])



    return(
        <MachineFamily.Provider value={{setMachineFamily, referencesFiltered}}>

        <Header page='Recepcion de equipos'></Header>
        <NewItemTitle
            buttonSpecification='Guardar'
            newReference={newReference}
            addNewReferences={addNewReferences}/>
        {/* <NewItemReception
            data={referencesData}
            addNewReferences={addNewReferences}/> */}
        {referencesFiltered.map(    ({
                            Modulos_Id_Modulo,  
                            Referencia_Equipo,
                            Marca, 
                            Modelo,
                            Id_Referencia    }) => {
                                              return  <References
                                                        hash={Id_Referencia}
                                                        referencesFiltered={referencesFiltered}
                                                        key={Id_Referencia}
                                                        modulo = {Modulos_Id_Modulo}
                                                        referencia = {Referencia_Equipo}
                                                        marca = {Marca}
                                                        modelo = {Modelo}
                                                        setSingleRef = {setSingleRef}
                                                />
        })}

        </MachineFamily.Provider>
    )
}


import NewItemTitle from "../../pages/NewItemTitle.jsx";
import References from "../../pages/References.jsx";

import React, { useState, useEffect, useContext } from "react";
import { Refs } from "../../Routes/RenderRoutes.jsx";

import UseCreateNewMachine from "../../dinamicHooks/UseCreateNewMachine.jsx";
import fetchRequestData from "../../Services/fetch.js";

export const MachineFamily = React.createContext();

export default function AuxInventoryReception() {
  const { referencesData, setReferencesData, setSingleRef } = useContext(Refs);

  const [machineFamily, setMachineFamily] = useState("");

  const { newReference, addNewReferences } = UseCreateNewMachine();

  const referencesFiltered = referencesData.filter((ref) => {
    return ref.Modulos_Id_Modulo == machineFamily;
  });

  useEffect(() => {
    try {
      fetchRequestData("sqlReferencias").then((res) => setReferencesData(res));
    } catch (error) {
      console.log(error);
    }
  }, [setReferencesData]);

  return (
    <MachineFamily.Provider value={{ setMachineFamily, referencesFiltered }}>
      <NewItemTitle
        newReference={newReference}
        addNewReferences={addNewReferences}
      />

      {referencesFiltered.map(
        ({
          Valor,
          Referencia_Equipo,
          Marca,
          Modelo,
          Id_Referencia,
          Storage,
          Pulgadas,
        }) => {
          return (
            <References
              hash={Id_Referencia}
              storage={Storage}
              pulgadas={Pulgadas}
              key={Id_Referencia}
              valor={Valor}
              referencia={Referencia_Equipo}
              marca={Marca}
              modelo={Modelo}
              setSingleRef={setSingleRef}
              buttonDetail={"Ingresar Unidades"}
            />
          );
        }
      )}
    </MachineFamily.Provider>
  );
}

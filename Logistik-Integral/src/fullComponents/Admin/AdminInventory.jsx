import ButtonReception from "../../components/ButtonReception.jsx";
import Inventarios from "../../pages/Inventarios.jsx";

import fetchRequestData from "../../Services/fetch.js";

import { useCallback, useEffect, useState } from "react";

export default function AdminInventory() {
  const [quantities, setQuantities] = useState([]);
  const [filtedQuantities, setFiltedQuantities] = useState([]);

  useEffect(() => {
    fetchRequestData().then((quantity) => setQuantities(quantity));
  }, []);

  const getModule = useCallback(
    (event) => {
      const { value } = event.target;

      if (value == "todo") {
        setFiltedQuantities(quantities);
      } else {
        let filtered = quantities.filter((ref) => ref.Family == value);
        setFiltedQuantities(filtered);
      }
    },
    [quantities]
  );

  return (
    <>
      <ButtonReception
        value="Crear Item"
        quantities={quantities}
        getModule={getModule}
      ></ButtonReception>
      {filtedQuantities.length == 0 ? (
        <div
          style={{ fontSize: "2rem", textAlign: "center", margin: "50% Auto" }}
        >
          Filtar para ver mas informacion
        </div>
      ) : (
        filtedQuantities.map(({ Family, Ref, Marca, Total, Id_Ref }) => {
          return (
            <Inventarios
              key={Ref}
              Id_Ref={Id_Ref}
              Family={Family}
              Ref={Ref}
              Marca={Marca}
              Total={Total}
            />
          );
        })
      )}
    </>
  );
}

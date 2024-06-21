import ButtonReception from "../../components/ButtonReception.jsx";
import Inventarios from "../../pages/Inventarios.jsx";

import fetchRefQuantity from "../../fetch/fetchRefQuantity.js";

import { useEffect, useState } from "react";

export default function AdminInventory() {
  const [quantities, setQuantities] = useState([]);

  useEffect(() => {
    fetchRefQuantity().then((quantity) => setQuantities(quantity));
  }, []);

  return (
    <>
      <ButtonReception value="Crear Item"></ButtonReception>
      {quantities.map(({ Family, Ref, Marca, Total, Id_Ref }) => {
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
      })}
    </>
  );
}

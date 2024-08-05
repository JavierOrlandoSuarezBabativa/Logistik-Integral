import ButtonReception from "../../components/ButtonReception.jsx";
import Inventarios from "../../pages/Inventarios.jsx";

import { useState, useEffect } from "react";

import fetchRequestData from "../../Services/fetch.js";

export default function AuxInventoty() {
  const [quantities, setQuantities] = useState([]);
  const [searchWord, setSearchWord] = useState("");

  useEffect(() => {
    fetchRequestData().then((quantity) => setQuantities(quantity));
  }, []);

  function handleSearch(event) {
    setSearchWord(event.target.value);
  }

  return (
    <>
      <ButtonReception value="Recepcion" />

      <div
        style={{
          display: "flex",
          justifySelf: "center",
          alignmentBaseline: "center",
          marginTop: "1rem",
        }}
      >
        <input type="text" placeholder="buscar..." onKeyUp={handleSearch} />
      </div>

      {quantities.map(({ Family, Ref, Marca, Total }) => {
        return (
          <Inventarios
            key={Ref}
            Family={Family}
            Ref={Ref}
            Marca={Marca}
            Total={Total}
            SearchWord={searchWord}
          />
        );
      })}
    </>
  );
}

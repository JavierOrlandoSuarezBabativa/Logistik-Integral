import Header from "../components/Header.jsx";
import { useEffect, useState } from "react";
import "../styles/registros.css";
import Axios from "axios";
import { CSVLink } from "react-csv";

export default function Registers() {
  const [singleBrand, setSingleBrand] = useState(null);
  const [singleBrandData, setSingleBrandData] = useState(null);
  const [recordsData, setRecordsData] = useState(null);
  const [startDate, setStartDate] = useState(null);
  const [finishDate, setFinishDate] = useState(null);

  function getStartDate(event) {
    setStartDate(event.target.value);
  }

  function getFinishDate(event) {
    setFinishDate(event.target.value);
  }

  function getSingleBrand(event) {
    const { value } = event.target;
    setSingleBrand(value);
    let filteredData = recordsData.filter((record) => record.Marca == value);
    setSingleBrandData(filteredData);
  }

  useEffect(() => {
    if (finishDate && startDate != null) {
      Axios.get(
        `http://localhost:3002/Registros/${startDate}/${finishDate}`
      ).then((res) => setRecordsData(res.data));
    }
  }, [startDate, finishDate]);

  return (
    <>
      <Header page={"Registros"} />

      <div id="register-container">
        <label htmlFor="">
          Desde:
          <input
            id="date-input"
            name="firstDate"
            type="date"
            onChange={getStartDate}
          />
        </label>
        <label htmlFor="">
          Hasta:
          <input
            id="date-input"
            name="finishDate"
            type="date"
            onChange={getFinishDate}
          />
        </label>
      </div>

      <div id="select-container">
        <select onChange={getSingleBrand}>
          <option>Filtrar busqueda</option>
          {recordsData != null &&
            recordsData.map(({ Id_Ref, Marca }) => {
              return (
                <option value={Marca} key={Id_Ref}>
                  {Marca}
                </option>
              );
            })}
        </select>
      </div>

      <div id="table-container">
        {recordsData != null && (
          <table>
            <thead>
              <tr>
                <th id="marca">Marca</th>
                <th id="ref">Ref</th>
                <th id="unidades">Total</th>
                <th id="fecha">Fecha</th>
                <th id="guia">Guia</th>
              </tr>
            </thead>
            <tbody>
              {singleBrandData != null &&
                singleBrandData.map(
                  ({
                    Id_Ref,
                    Cantidad,
                    Referencia,
                    Fecha,
                    Marca,
                    Numero_Guia,
                  }) => {
                    let sliceDate = Fecha.slice(0, Fecha.indexOf("T"));
                    return (
                      <tr key={Id_Ref}>
                        <td>{Marca}</td>
                        <td>{Referencia}</td>
                        <td>{Cantidad}</td>
                        <td>{sliceDate}</td>
                        <td>{Numero_Guia}</td>
                      </tr>
                    );
                  }
                )}
            </tbody>
          </table>
        )}
      </div>

      <div style={{ display: "flex", justifyContent: "center" }}>
        {singleBrandData != null && (
          <CSVLink data={singleBrandData}>
            <button>Descargar Registros</button>
          </CSVLink>
        )}
      </div>
    </>
  );
}

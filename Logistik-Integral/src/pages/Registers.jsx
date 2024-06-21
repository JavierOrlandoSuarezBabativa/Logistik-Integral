import { useEffect, useState } from "react";
import "../styles/registros.css";
import Axios from "axios";
import { CSVLink } from "react-csv";

export default function Registers() {
  const [data, setData] = useState(null);
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
    let filteredData = recordsData.filter((record) => record.Marca == value);
    setSingleBrandData(filteredData);
  }

  let filteredBrands = [];

  if (recordsData != undefined) {
    recordsData.forEach((record) => {
      if (!filteredBrands.includes(record.Marca)) {
        filteredBrands.push(record.Marca);
      }
    });
  }

  useEffect(() => {
    if (finishDate && startDate != null) {
      Axios.get(
        `http://localhost:3002/Registros/${startDate}/${finishDate}`
      ).then((res) => {
        setRecordsData(res.data);
        setData(res.data);
      });
    }
  }, [startDate, finishDate, singleBrandData]);

  return (
    <>
      <div id="register-container">
        <div className="date-div">
          <label htmlFor="">
            Desde:
            <input
              id="date-input"
              name="firstDate"
              type="date"
              onChange={getStartDate}
            />
          </label>
        </div>
        <div className="date-div">
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
      </div>

      <div id="register-container">
        {data != null && (
          <CSVLink data={data}>
            <div id="CSVlink-button">
              <button>Descargar todos los registros</button>
            </div>
          </CSVLink>
        )}

        <div id="select-container">
          <select onChange={getSingleBrand}>
            <option>Filtrar busqueda</option>
            {filteredBrands != null &&
              filteredBrands.map((brand, index) => {
                return (
                  <option value={brand} key={index}>
                    {brand}
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
                {singleBrandData != null
                  ? singleBrandData.map(
                      ({
                        index,
                        Cantidad,
                        Referencia,
                        Fecha,
                        Marca,
                        Numero_Guia,
                      }) => {
                        let sliceDate = Fecha.slice(0, Fecha.indexOf("T"));
                        return (
                          <tr key={index}>
                            <td>{Marca}</td>
                            <td>{Referencia}</td>
                            <td>{Cantidad}</td>
                            <td>{sliceDate}</td>
                            <td>{Numero_Guia}</td>
                          </tr>
                        );
                      }
                    )
                  : data.map(
                      ({
                        index,
                        Cantidad,
                        Referencia,
                        Fecha,
                        Marca,
                        Numero_Guia,
                      }) => {
                        let sliceDate = Fecha.slice(0, Fecha.indexOf("T"));
                        return (
                          <tr key={index}>
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
              <button>Descargar</button>
            </CSVLink>
          )}
        </div>
      </div>
    </>
  );
}

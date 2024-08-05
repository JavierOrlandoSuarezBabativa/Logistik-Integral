import "../styles/Login.css";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Axios from "axios";
import GetUserInfo from "../Services/GetUserInfo";

export default function SignUp() {
  const navigateTo = useNavigate();

  const { newInfo, addInfo } = GetUserInfo();

  const [changeButtons, setChangeButtons] = useState(false);
  const [code, setCode] = useState(null);
  const [confirmationCode, setConfirmacionCode] = useState("");

  function createUser() {
    Axios.post("http://localhost:3002/registro", newInfo).then(navigateTo("/"));
  }

  function getCode() {
    if (checkEmptyValues(newInfo)) {
      console.log("empty inputs");
    } else {
      Axios.get(`http://localhost:3002/Codigo/${newInfo.mail}`).then((res) =>
        setCode(res.data[0].Codigo)
      );
      setChangeButtons(true);
    }
  }

  function getConfirmacionCode(event) {
    setConfirmacionCode(event.target.value);
  }

  function checkEmptyValues(obj) {
    let values = Object.values(obj);
    for (let data of values) {
      if (data == "") {
        Object.keys(obj).forEach((key) => {
          if (obj[key] == "") {
            obj[key] = "";
          }
        });
        return true;
      }
    }
    return false;
  }

  return (
    <>
      <div className="login-container">
        <div className="information-requirement">
          <h1>Registro</h1>

          <div className="information-requirement-input">
            <i className="material-icons">person</i>
            <input
              type="text"
              name="name"
              placeholder="Nombre"
              onChange={addInfo}
            />
          </div>

          <div className="information-requirement-input">
            <i className="material-icons">person_add</i>
            <input
              type="text"
              name="lastname"
              placeholder="Apellido"
              onChange={addInfo}
            />
          </div>

          <div className="information-requirement-input">
            <i className="material-icons">fingerprint</i>
            <input
              type="text"
              name="id"
              placeholder="Cedula"
              onChange={addInfo}
            />
          </div>

          <div className="information-requirement-input">
            <i className="material-icons">call</i>
            <input
              type="text"
              name="phone"
              placeholder="Celular"
              onChange={addInfo}
            />
          </div>

          <div className="information-requirement-input">
            <select name="role" className="select-container" onChange={addInfo}>
              <option value="">Rol de usuario</option>
              <option value="Administrador">Administrador</option>
              <option value="Auxiliar">Auxiliar</option>
              <option value="Cliente">Cliente</option>
            </select>
          </div>

          <div className="information-requirement-input">
            <i className="material-icons">password</i>
            <input
              type="password"
              name="password"
              placeholder="Contraseña"
              onChange={addInfo}
            />
          </div>

          <div className="information-requirement-input">
            <label htmlFor="bodegaId">Bodega ID</label>
            <input
              id="bodegaId"
              className="werehouse"
              type="number"
              name="werehouseNUmber"
              onChange={addInfo}
            />
          </div>

          {changeButtons ? (
            <div className="information-requirement-input">
              <label htmlFor="Code">Codigo de Confirmacion</label>
              <input
                id="Code"
                className="werehouse"
                type="number"
                value={confirmationCode}
                onChange={getConfirmacionCode}
              />
            </div>
          ) : (
            <div className="information-requirement-input">
              <i className="material-icons">email</i>
              <input
                id="bodegaId"
                type="email"
                name="mail"
                placeholder="Correo"
                onChange={addInfo}
              />
            </div>
          )}

          <div className="button">
            {changeButtons && code == confirmationCode ? (
              <button id="register_button" type="submit" onClick={createUser}>
                Crear Cuenta
              </button>
            ) : (
              <button id="register_button" type="submit" onClick={getCode}>
                Solicitar codigo
              </button>
            )}
            <hr />
            <button onClick={() => navigateTo("/")}>Cancelar</button>
          </div>
        </div>
      </div>
    </>
  );
}

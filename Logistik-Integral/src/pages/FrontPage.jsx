import "../styles/FrontPage.css";
import Logo from "../assets/logo_1.png";

import { Link } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { UserType } from "../App";

import Axios from "axios";

import Uselogin from "../dinamicHooks/UseLogin.jsx";
import Login from "../Services/Login.jsx";

function FrontPage() {
  const { error, switchUserType } = Login();

  const { userInfo, checkUserInfo, setUserInfo } = Uselogin();
  const { setUserType, setIsActive } = useContext(UserType);

  const [loginStatus, setLoginStatus] = useState("");
  const [statusHolder, setStatusHolder] = useState("message");

  useEffect(() => {
    if (loginStatus !== "") {
      setStatusHolder("confirmation-message");
      setTimeout(() => {
        setStatusHolder("message");
        setLoginStatus("");
      }, 1500);
    }
  }, [loginStatus]);

  function loginUser(e) {
    e.preventDefault();
    Axios.post("http://localhost:3002/login", userInfo).then((response) => {
      if (response.data.message) {
        error(response, setLoginStatus, setUserInfo);
      } else {
        switchUserType(response, setUserType, setIsActive);
      }
    });
  }

  return (
    <>
      <form className="front_page-container">
        <div id="logo">
          <img src={Logo} alt="Logo Logistik Integral" />
        </div>

        <div className="information-requirement">
          <span id={statusHolder}>{loginStatus}</span>
          <div className="information-requirement-input">
            <i className="material-icons">person</i>
            <input
              type="text"
              name="name"
              placeholder="Nombre de usuario"
              value={userInfo.name}
              onChange={checkUserInfo}
            />
          </div>

          <div className="information-requirement-input">
            <select
              name="rol"
              className="select-container"
              onChange={checkUserInfo}
              value={userInfo.rol}
            >
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
              value={userInfo.password}
              placeholder="Contraseña"
              onChange={checkUserInfo}
            />
          </div>

          <div className="button">
            <button id="log-in_button" type="submit" onClick={loginUser}>
              INGRESAR
            </button>
            <hr />
            <Link to={"/signUp"}>
              <button id="register_button" type="submit">
                SIGN UP
              </button>
            </Link>
          </div>
        </div>
      </form>
    </>
  );
}

export default FrontPage;

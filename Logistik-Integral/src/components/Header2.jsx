import { Link, Outlet } from "react-router-dom";
import PropTypes from "prop-types";
import { UserType } from "../App";
import { useContext } from "react";

export default function Header() {
  const { userType, setIsActive } = useContext(UserType);

  let userMenu;

  switch (userType) {
    case "Administrador":
      userMenu = "/administrador";
      break;
    case "Auxiliar":
      userMenu = "/auxiliar";
      break;
    default:
      userMenu = "/cliente";
      break;
  }

  return (
    <>
      <div id="header">
        <div id="icons-container">
          <div>
            <Link to={userMenu}>
              <i className="material-icons left">arrow_back</i>
            </Link>
          </div>
          <div>
            <Link to={"/"}>
              <i
                onClick={() => setIsActive(false)}
                className="material-icons right"
              >
                logout
              </i>
            </Link>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
}

Header.propTypes = {
  firstUI: PropTypes.bool,
  user: PropTypes.string,
  page: PropTypes.string,
};

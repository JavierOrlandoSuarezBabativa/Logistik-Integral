import PropTypes from "prop-types";

import { Link } from "react-router-dom";
import { UserType } from "../App";
import { useContext } from "react";

export default function Button({ value, quantities, getModule }) {
  const style = {
    textAlign: "center",
    marginTop: "10px",
    button: {
      width: "60vw",
    },
  };

  const { userType } = useContext(UserType);

  return (
    <div style={style}>
      <Link to={userType === "Administrador" ? "/createItem" : "/reception"}>
        <button style={style}>{value}</button>
      </Link>
      {userType === "Administrador" && (
        <select name="Modules" value={quantities.Family} onChange={getModule}>
          <option value="">Categorias</option>
          <option value="1">Laptop</option>
          <option value="2">Tablet</option>
          <option value="3">Smartphone</option>
          <option value="todo">Sin filtro</option>
        </select>
      )}
    </div>
  );
}

Button.propTypes = {
  value: PropTypes.string,
  quantities: PropTypes.arrayOf(PropTypes.object),
  getModule: PropTypes.func,
};

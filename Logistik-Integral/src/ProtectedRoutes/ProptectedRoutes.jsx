import { useNavigate } from "react-router-dom";
import { UserType } from "../App";
import { useContext } from "react";
import PropTypes from "prop-types";

const AuthGuard = ({ children }) => {
  const { isActive } = useContext(UserType);

  const navigateTo = useNavigate();

  if (isActive == false) {
    return navigateTo("/signUp");
  }

  return <>{children}</>;
};

export default AuthGuard;

AuthGuard.propTypes = {
  children: PropTypes.node,
};

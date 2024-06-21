import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigateTo = useNavigate();

  function error(response, setLoginStatus, setUserInfo) {
    navigateTo("/");
    setLoginStatus(response.data.message);
    setUserInfo({
      name: "",
      rol: "",
      password: "",
    });
  }

  function switchUserType(response, setUserType, setIsActive) {
    setIsActive(true);
    switch (response.data[0].Cargo) {
      case "Administrador":
        setUserType("Administrador");
        navigateTo("/administrador");
        break;
      case "Auxiliar":
        setUserType("Auxiliar");
        navigateTo("/auxiliar");
        break;
      case "Cliente":
        setUserType("Cliente");
        navigateTo("/cliente");
        break;
      default:
        break;
    }
  }

  return { error, switchUserType };
}

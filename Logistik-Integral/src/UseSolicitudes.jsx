
import { UserType } from "./App.jsx";
import { useContext } from "react";
import AdminSolicitutes from "./fullComponents/Admin/AdminSolicitutes.jsx";
import AuxSolicitutes from "./fullComponents/Auxiliary/AuxSolicitutes.jsx";
import ClientCreateRequest from "./fullComponents/Client/ClientCreateRequest.jsx";
import AdminSolicitutesDetails from "./fullComponents/Admin/AdminSolicitutesDetails.jsx";
import AuxSolicitutesManagement from "./fullComponents/Auxiliary/AuxSolicitutesManagement.jsx";
import AuxReceiverDetails from './fullComponents/Auxiliary/AuxReceiverDetails.jsx'
import AdminReceiverDetails from "./fullComponents/Admin/AdminReceiverDetails.jsx";
import AdminInventory from './fullComponents/Admin/AdminInventory.jsx'
import Auxinventory from './fullComponents/Auxiliary/AuxInventory.jsx'
import AdminInventoryDetails from './fullComponents/Admin/AdminInventoryDetails.jsx'
import AuxInventoryDetails from './fullComponents/Auxiliary/AuxInventoryDetails.jsx'

export function UseSolicitudes(){

  const { userType } = useContext(UserType);

  let solicitudes;

  switch (userType) {
    case "Administrador":
      solicitudes = <AdminSolicitutes></AdminSolicitutes>;
      break;
    case "Auxiliar":
      solicitudes = <AuxSolicitutes></AuxSolicitutes>;
      break;
    case "Cliente":
      solicitudes = <ClientCreateRequest></ClientCreateRequest>;
      break;
    default:
      null;
  }

  return solicitudes
}

export function UseInventory(){

  const { userType } = useContext(UserType);

  let inventories;

  switch (userType) {
    case "Administrador":
      inventories = <AdminInventory></AdminInventory>;
      break;
    case "Auxiliar":
      inventories = <Auxinventory></Auxinventory>;
      break;
    default:
      null;
  }

  return inventories
}

export function UseInventoryDetails(){

  const { userType } = useContext(UserType);

  let inventoriesDetails;

  switch (userType) {
    case "Administrador":
      inventoriesDetails = <AdminInventoryDetails></AdminInventoryDetails>;
      break;
    case "Auxiliar":
      inventoriesDetails = <AuxInventoryDetails></AuxInventoryDetails>;
      break;
    default:
      null;
  }

  return inventoriesDetails
}

export function UseSolicitudesButton(){

  const { userType } = useContext(UserType);

  let solicitudesButton;

  switch (userType) {
    case "Administrador":
      solicitudesButton = <AdminSolicitutesDetails></AdminSolicitutesDetails>;
      break;
    case "Auxiliar":
      solicitudesButton = <AuxSolicitutesManagement></AuxSolicitutesManagement>;
      break;
    default:
      null;
  }

  return solicitudesButton
}

export function UseSolicitudesReceiverDetailsButton(){

  const { userType } = useContext(UserType);

  let solicitudesReceiverButton;

  switch (userType) {
    case "Administrador":
      solicitudesReceiverButton = <AdminReceiverDetails></AdminReceiverDetails>;
      break;
    case "Auxiliar":
      solicitudesReceiverButton = <AuxReceiverDetails></AuxReceiverDetails>;
      break;
    default:
      null;
  }

  return solicitudesReceiverButton
}





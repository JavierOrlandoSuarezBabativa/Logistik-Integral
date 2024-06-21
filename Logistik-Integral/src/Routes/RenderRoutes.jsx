import React, { lazy, useState } from "react";
import { createBrowserRouter } from "react-router-dom";
import AuthGuard from "../ProtectedRoutes/ProptectedRoutes.jsx";

import {
  UseSolicitudes,
  UseSolicitudesButton,
  UseSolicitudesReceiverDetailsButton,
  UseInventory,
  UseInventoryDetails,
} from "../UseSolicitudes.jsx";

import FrontPage from "../pages/FrontPage.jsx";
import AuxInventoryReception from "../fullComponents/Auxiliary/AuxInventoryReception.jsx";
import Registers from "../pages/Registers.jsx";
import AuxSendRef from "../fullComponents/Auxiliary/AuxSendRef.jsx";

const Menu = lazy(() => import("../pages/Menu.jsx"));
const SignUp = lazy(() => import("../pages/SignUp.jsx"));
const Header2 = lazy(() => import("../components/Header2.jsx"));

const AdminCreateRef = lazy(() => {
  return import("../fullComponents/Admin/AdminCreateRef.jsx");
});

const CreateSolicitute = lazy(() => {
  return import("../fullComponents/Client/CreateSolicitute.jsx");
});

export const RequestId = React.createContext();
export const Serials = React.createContext();
export const Refs = React.createContext();

export default function RenderRoutes() {
  const [requestId, setRequestId] = useState();
  const [referencesData, setReferencesData] = useState([]);
  const [singleRef, setSingleRef] = useState();
  const [serialRef, setSerialRef] = useState();

  const router = createBrowserRouter([
    {
      path: "/",
      element: <FrontPage />,
    },
    {
      path: "/signUp",
      element: <SignUp />,
    },
    {
      element: <Header2 />,
      AuthGuard: lazy(() => import("../ProtectedRoutes/ProptectedRoutes.jsx")),
      children: [
        {
          path: "/administrador",
          element: (
            <AuthGuard>
              <Menu solicitute="Solicitudes" inventory="Inventario"></Menu>
            </AuthGuard>
          ),
        },
        {
          path: "/auxiliar",
          element: (
            <AuthGuard>
              <Menu
                solicitute="Solicitudes Pendientes"
                inventory="Inventario Almacen"
              ></Menu>
            </AuthGuard>
          ),
        },
        {
          path: "/cliente",
          element: (
            <AuthGuard>
              <Menu
                solicitute="Hacer Solicitud"
                inventory="Inventario Disponible"
                registration="Inhabilitado En Desarrollo"
              ></Menu>
            </AuthGuard>
          ),
        },
        {
          path: "/solicitudes",
          element: (
            <AuthGuard>
              <RequestId.Provider value={{ setRequestId }}>
                <div>
                  <UseSolicitudes></UseSolicitudes>
                </div>
              </RequestId.Provider>
            </AuthGuard>
          ),
        },
        {
          path: "/inventarios",
          element: (
            <AuthGuard>
              <Serials.Provider value={{ setSerialRef }}>
                <UseInventory></UseInventory>
              </Serials.Provider>
            </AuthGuard>
          ),
        },
        {
          path: "/inventoryDetails",
          element: (
            <AuthGuard>
              <Serials.Provider value={{ serialRef }}>
                <UseInventoryDetails />
              </Serials.Provider>
            </AuthGuard>
          ),
        },
        {
          path: "/reception",
          element: (
            <AuthGuard>
              <Refs.Provider
                value={{ referencesData, setReferencesData, setSingleRef }}
              >
                <AuxInventoryReception />
              </Refs.Provider>
            </AuthGuard>
          ),
        },
        {
          path: "/id",
          element: (
            <AuthGuard>
              <Refs.Provider value={{ referencesData, singleRef }}>
                <AuxSendRef />
              </Refs.Provider>
            </AuthGuard>
          ),
        },
        {
          path: "/createItem",
          element: (
            <AuthGuard>
              <AdminCreateRef />,
            </AuthGuard>
          ),
        },
        {
          path: "/newSolicitute",
          element: (
            <AuthGuard>
              <CreateSolicitute />,
            </AuthGuard>
          ),
        },
        {
          path: "/solicitudesButton",
          element: (
            <AuthGuard>
              <RequestId.Provider value={{ requestId }}>
                <UseSolicitudesButton />
              </RequestId.Provider>
            </AuthGuard>
          ),
        },
        {
          path: "/SolicitudesReceiverDetails",
          element: (
            <AuthGuard>
              <UseSolicitudesReceiverDetailsButton />,
            </AuthGuard>
          ),
        },
        {
          path: "/registros",
          element: (
            <AuthGuard>
              <Registers />,
            </AuthGuard>
          ),
        },
      ],
    },
  ]);

  return { router };
}

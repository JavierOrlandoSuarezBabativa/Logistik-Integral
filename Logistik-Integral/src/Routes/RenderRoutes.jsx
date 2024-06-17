import { lazy } from "react";
import React, { useState } from "react";

import {
  UseSolicitudes,
  UseSolicitudesButton,
  UseSolicitudesReceiverDetailsButton,
  UseInventory,
  UseInventoryDetails,
} from "../UseSolicitudes.jsx";

import { createBrowserRouter } from "react-router-dom";
import FrontPage from "../pages/FrontPage.jsx";
import SignUp from "../pages/SignUp.jsx";
import Menu from "../pages/Menu.jsx";
import AuxInventoryReception from "../fullComponents/Auxiliary/AuxInventoryReception.jsx";
import AuxSendRef from "../fullComponents/Auxiliary/AuxSendRef.jsx";
import AdminCreateRef from "../fullComponents/Admin/AdminCreateRef.jsx";
import CreateSolicitute from "../fullComponents/Client/CreateSolicitute.jsx";
import Registers from "../pages/Registers.jsx";

import Header2 from "../components/Header2.jsx";

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
      children: [
        {
          path: "/administrador",
          element: (
            <div>
              <Menu solicitute="Solicitudes" inventory="Inventario"></Menu>
            </div>
          ),
        },
        {
          path: "/auxiliar",
          element: (
            <div>
              <Menu
                solicitute="Solicitudes Pendientes"
                inventory="Inventario Almacen"
              ></Menu>
            </div>
          ),
        },
        {
          path: "/cliente",
          element: (
            <div>
              <Menu
                solicitute="Hacer Solicitud"
                inventory="Inventario Disponible"
                registration="Inhabilitado En Desarrollo"
              ></Menu>
            </div>
          ),
        },
        {
          path: "/solicitudes",
          element: (
            <RequestId.Provider value={{ setRequestId }}>
              <div>
                <UseSolicitudes></UseSolicitudes>
              </div>
            </RequestId.Provider>
          ),
        },
        {
          path: "/inventarios",
          element: (
            <>
              <Serials.Provider value={{ setSerialRef }}>
                <UseInventory></UseInventory>
              </Serials.Provider>
            </>
          ),
        },
        {
          path: "/inventoryDetails",
          element: (
            <>
              <Serials.Provider value={{ serialRef }}>
                <UseInventoryDetails />
              </Serials.Provider>
            </>
          ),
        },
        {
          path: "/reception",
          element: (
            <>
              <Refs.Provider
                value={{ referencesData, setReferencesData, setSingleRef }}
              >
                <AuxInventoryReception />
              </Refs.Provider>
            </>
          ),
        },
        {
          path: "/id",
          element: (
            <>
              <Refs.Provider value={{ referencesData, singleRef }}>
                <AuxSendRef />
              </Refs.Provider>
            </>
          ),
        },
        {
          path: "/createItem",
          element: <AdminCreateRef />,
        },
        {
          path: "/newSolicitute",
          element: <CreateSolicitute />,
        },
        {
          path: "/solicitudesButton",
          element: (
            <>
              <RequestId.Provider value={{ requestId }}>
                <UseSolicitudesButton />
              </RequestId.Provider>
            </>
          ),
        },
        {
          path: "/SolicitudesReceiverDetails",
          element: <UseSolicitudesReceiverDetailsButton />,
        },
        {
          path: "/registros",
          element: <Registers />,
        },
      ],
    },
    // {
    //   path: "/administrador",
    //   element: (
    //     <div>
    //       <Header user="Administrador" firstUI={true} />
    //       <Menu solicitute="Solicitudes" inventory="Inventario"></Menu>
    //     </div>
    //   ),
    // },
    // {
    //   path: "/auxiliar",
    //   element: (
    //     <div>
    //       <Header user="Auxiliar" firstUI={true} />
    //       <Menu
    //         solicitute="Solicitudes Pendientes"
    //         inventory="Inventario Almacen"
    //       ></Menu>
    //     </div>
    //   ),
    // },
    // {
    //   path: "/cliente",
    //   element: (
    //     <div>
    //       <Header user="Cliente" firstUI={true} />
    //       <Menu
    //         solicitute="Hacer Solicitud"
    //         inventory="Inventario Disponible"
    //         registration="Inhabilitado En Desarrollo"
    //       ></Menu>
    //     </div>
    //   ),
    // },
    // {
    //   path: "/solicitudes",
    //   element: (
    //     <RequestId.Provider value={{ setRequestId }}>
    //       <div>
    //         <UseSolicitudes></UseSolicitudes>
    //       </div>
    //     </RequestId.Provider>
    //   ),
    // },
    // {
    //   path: "/inventarios",
    //   element: (
    //     <>
    //       <Serials.Provider value={{ setSerialRef }}>
    //         <UseInventory></UseInventory>
    //       </Serials.Provider>
    //     </>
    //   ),
    // },
    // {
    //   path: "/inventoryDetails",
    //   element: (
    //     <>
    //       <Serials.Provider value={{ serialRef }}>
    //         <UseInventoryDetails />
    //       </Serials.Provider>
    //     </>
    //   ),
    // },
    // {
    //   path: "/reception",
    //   element: (
    //     <>
    //       <Refs.Provider
    //         value={{ referencesData, setReferencesData, setSingleRef }}
    //       >
    //         <AuxInventoryReception />
    //       </Refs.Provider>
    //     </>
    //   ),
    // },
    // {
    //   path: "/id",
    //   element: (
    //     <>
    //       <Refs.Provider value={{ referencesData, singleRef }}>
    //         <AuxSendRef />
    //       </Refs.Provider>
    //     </>
    //   ),
    // },
    // {
    //   path: "/createItem",
    //   element: <AdminCreateRef />,
    // },
    // {
    //   path: "/newSolicitute",
    //   element: <CreateSolicitute />,
    // },
    // {
    //   path: "/solicitudesButton",
    //   element: (
    //     <>
    //       <RequestId.Provider value={{ requestId }}>
    //         <UseSolicitudesButton />
    //       </RequestId.Provider>
    //     </>
    //   ),
    // },
    // {
    //   path: "/SolicitudesReceiverDetails",
    //   element: <UseSolicitudesReceiverDetailsButton />,
    // },
    // {
    //   path: "/registros",
    //   element: <Registers />,
    // },
  ]);

  return { router };
}

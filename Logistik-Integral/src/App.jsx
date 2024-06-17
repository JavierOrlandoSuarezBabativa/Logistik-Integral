// import RenderRoutes from "./Routes/RenderRoutes"; !!!!!!!!!!!!!!!!!!!
// import { createBrowserRouter, RouterProvider } from "react-router-dom";!!!!!!!!!!!!!!!!!!!!!

// import FrontPage from "./pages/FrontPage.jsx";
// import SignUp from "./pages/SignUp.jsx";
// import Header from "./components/Header.jsx";
// import Menu from "./pages/Menu.jsx";
// import React, { useState } from "react";!!!!!!!!!!!!!!!!!!!!!!!!!
// import {
//   UseSolicitudes,
//   UseSolicitudesButton,
//   UseSolicitudesReceiverDetailsButton,
//   UseInventory,
//   UseInventoryDetails,
// } from "./UseSolicitudes.jsx";
// import AuxinventoryReception from "./fullComponents/Auxiliary/AuxInventoryReception.jsx";
// import AdminCreateRef from "./fullComponents/Admin/AdminCreateRef.jsx";
// import CreateSolicitute from "./fullComponents/Client/CreateSolicitute.jsx";
// import AuxSendRef from "./fullComponents/Auxiliary/AuxSendRef.jsx";
// import Registers from "./pages/Registers.jsx";

// export const UserType = React.createContext();!!!!!!!!!!!!!!!

// export const Refs = React.createContext();

// export const Serials = React.createContext();

// export const RequestId = React.createContext();

// export default function App() { !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!1
//   const [userType, setUserType] = useState(null); !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!1
//   const { router } = RenderRoutes(); !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!1

// const [referencesData, setReferencesData] = useState([]);

// const [singleRef, setSingleRef] = useState();

// const [serialRef, setSerialRef] = useState();

// const [requestId, setRequestId] = useState();

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: (
//       <div>
//         <FrontPage />
//       </div>
//     ),
//   },
//   {
//     path: "/signUp",
//     element: (
//       <div>
//         <SignUp />
//       </div>
//     ),
//   },
//   {
//     path: "/administrador",
//     element: (
//       <div>
//         <Header user="Administrador" firstUI={true} />
//         <Menu solicitute="Solicitudes" inventory="Inventario"></Menu>
//       </div>
//     ),
//   },
//   {
//     path: "/auxiliar",
//     element: (
//       <div>
//         <Header user="Auxiliar" firstUI={true} />
//         <Menu
//           solicitute="Solicitudes Pendientes"
//           inventory="Inventario Almacen"
//         ></Menu>
//       </div>
//     ),
//   },
//   {
//     path: "/cliente",
//     element: (
//       <div>
//         <Header user="Cliente" firstUI={true} />
//         <Menu
//           solicitute="Hacer Solicitud"
//           inventory="Inventario Disponible"
//           registration="Inhabilitado En Desarrollo"
//         ></Menu>
//       </div>
//     ),
//   },
//   {
//     path: "/solicitudes",
//     element: (
//       <RequestId.Provider value={{ setRequestId }}>
//         <div>
//           <UseSolicitudes></UseSolicitudes>
//         </div>
//       </RequestId.Provider>
//     ),
//   },
//   {
//     path: "/inventarios",
//     element: (
//       <>
//         <Serials.Provider value={{ setSerialRef }}>
//           <UseInventory></UseInventory>
//         </Serials.Provider>
//       </>
//     ),
//   },
//   {
//     path: "/inventoryDetails",
//     element: (
//       <>
//         <Serials.Provider value={{ serialRef }}>
//           <UseInventoryDetails></UseInventoryDetails>
//         </Serials.Provider>
//       </>
//     ),
//   },
//   {
//     path: "/reception",
//     element: (
//       <>
//         <Refs.Provider
//           value={{ referencesData, setReferencesData, setSingleRef }}
//         >
//           <AuxinventoryReception></AuxinventoryReception>
//         </Refs.Provider>
//       </>
//     ),
//   },
//   {
//     path: "/id",
//     element: (
//       <>
//         <Refs.Provider value={{ referencesData, singleRef }}>
//           <AuxSendRef />
//         </Refs.Provider>
//       </>
//     ),
//   },
//   {
//     path: "/createItem",
//     element: <AdminCreateRef></AdminCreateRef>,
//   },
//   {
//     path: "/newSolicitute",
//     element: <CreateSolicitute></CreateSolicitute>,
//   },
//   {
//     path: "/solicitudesButton",
//     element: (
//       <>
//         <RequestId.Provider value={{ requestId }}>
//           <UseSolicitudesButton></UseSolicitudesButton>
//         </RequestId.Provider>
//       </>
//     ),
//   },
//   {
//     path: "/SolicitudesReceiverDetails",
//     element: (
//       <UseSolicitudesReceiverDetailsButton></UseSolicitudesReceiverDetailsButton>
//     ),
//   },
//   {
//     path: "/registros",
//     element: <Registers />,
//   },
// ]);

//   return (!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//     <UserType.Provider value={{ userType, setUserType }}>!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//       <div>!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//         <RouterProvider router={router} />!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//       </div>!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//     </UserType.Provider>!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//   );!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// }!!!!!!!!!!!!!!!!!!!!!!!!!!!!

import RenderRoutes from "./Routes/RenderRoutes";
import { RouterProvider } from "react-router-dom";
import React, { useState } from "react";

export const UserType = React.createContext();

export default function App() {
  const [userType, setUserType] = useState(null);
  const { router } = RenderRoutes();

  return (
    <UserType.Provider value={{ userType, setUserType }}>
      <div>
        <RouterProvider router={router} />
      </div>
    </UserType.Provider>
  );
}


import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import FrontPage from './pages/FrontPage.jsx'
import SignUp from './pages/SignUp.jsx'
import Header from './components/Header.jsx'
import Menu from './pages/Menu.jsx'
import React, { useState } from 'react'
import  {UseSolicitudes,
        UseSolicitudesButton,
        UseSolicitudesReceiverDetailsButton,
        UseInventory,
        UseInventoryDetails} from './UseSolicitudes.jsx'
import AuxinventoryReception from './fullComponents/Auxiliary/AuxInventoryReception.jsx'
import AdminCreateRef from './fullComponents/Admin/AdminCreateRef.jsx'
import CreateSolicitute from './fullComponents/Client/CreateSolicitute.jsx'



export const UserType = React.createContext()




export default function App(){

    const [userType, setUserType] = useState(null)




    const router = createBrowserRouter([
        {
            path: '/',
            element: <div><FrontPage/></div>,
        },
        {
            path: '/signUp',
            element: <div><SignUp/></div>
        },
        {
            path: '/administrador',
            element: <div>
                        <Header user='Administrador' firstUI={true}/>
                         <Menu solicitute='Solicitudes' inventory='Inventario'></Menu>
                     </div>
        },
        {
            path: '/auxiliar',
            element: <div>
                        <Header user='Auxiliar'firstUI={true}/>
                        <Menu solicitute='Solicitudes Pendientes' inventory='Inventario Almacen'></Menu>
                    </div>
        },
        {
            path: '/cliente',
            element: <div>
                        <Header user='Cliente' firstUI={true}/>
                        <Menu solicitute='Hacer Solicitud' inventory='Inventario Disponible' registration='Inhabilitado En Desarrollo'></Menu>
                    </div>
        },
        {
            path: '/solicitudes',
            element: <div><UseSolicitudes ></UseSolicitudes></div>
        },
        {
            path: '/inventarios',
            element: <UseInventory></UseInventory>
        },
        {
            path: '/inventoryDetails',
            element: <UseInventoryDetails></UseInventoryDetails>
        },
        {
            path: '/reception',
            element: <AuxinventoryReception></AuxinventoryReception>
        },
        {
            path: '/createItem',
            element: <AdminCreateRef></AdminCreateRef>
        },
        {
            path: '/newSolicitute',
            element: <CreateSolicitute></CreateSolicitute>
        },
        {
            path: '/solicitudesButton',
            element: <div><UseSolicitudesButton ></UseSolicitudesButton></div>
        },
        {
            path: '/SolicitudesReceiverDetails',
            element: <UseSolicitudesReceiverDetailsButton></UseSolicitudesReceiverDetailsButton>
        }

    ])


    return(
        <UserType.Provider value={{userType, 
                                setUserType,
                                    }}>
        <div>
            <RouterProvider router={router}/>
        </div>
        </UserType.Provider>
        
    )

}


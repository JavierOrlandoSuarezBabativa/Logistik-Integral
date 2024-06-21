import RenderRoutes from "./Routes/RenderRoutes";
import { RouterProvider } from "react-router-dom";
import React, { useState } from "react";
import { Suspense } from "react";

export const UserType = React.createContext();

export default function App() {
  const [userType, setUserType] = useState(null);
  const [isActive, setIsActive] = useState(false);
  const { router } = RenderRoutes();

  return (
    <div>
      <Suspense fallback={"cargando"}>
        <UserType.Provider
          value={{ userType, setUserType, isActive, setIsActive }}
        >
          <RouterProvider router={router} />
        </UserType.Provider>
      </Suspense>
    </div>
  );
}

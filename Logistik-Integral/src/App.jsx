import RenderRoutes from "./Routes/RenderRoutes";
import { RouterProvider } from "react-router-dom";
import React, { useState } from "react";
import { Suspense } from "react";
import "./styles/spinner.css";

export const UserType = React.createContext();

export default function App() {
  const [userType, setUserType] = useState("");
  const [isActive, setIsActive] = useState(false);
  const { router } = RenderRoutes();

  return (
    <div>
      <Suspense
        fallback={
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div className="spinner"></div>
            <div>Cargando...</div>
          </div>
        }
      >
        <UserType.Provider
          value={{ userType, setUserType, isActive, setIsActive }}
        >
          <RouterProvider router={router} />
        </UserType.Provider>
      </Suspense>
    </div>
  );
}

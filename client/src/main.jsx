import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./router.jsx";
import { AuthContextProvider } from "./context/AuthContext.jsx";
import { ThemeContextProvider } from "./context/ThemeContext.jsx";
import { SideBarContextProvider } from "./context/SidebarContext.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <>
      <ThemeContextProvider>
        <AuthContextProvider>
          <SideBarContextProvider>
            <RouterProvider router={router} />
          </SideBarContextProvider>
        </AuthContextProvider>
      </ThemeContextProvider>
    </>
  </StrictMode>
);

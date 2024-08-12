import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import { App } from "./App.tsx";
import { Login } from "./pages/Login.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <App /> */}
    <Login />
  </StrictMode>
);

import React from "react";
import { useRoutes } from "react-router-dom";
import { routes } from "./routes";

const App: React.FC = () => {
    const isLoggedIn = true;

    return useRoutes(routes(isLoggedIn));
};

export default App;

import { Navigate, RouteObject } from "react-router-dom";

import { List } from "./pages/List/List";
import { Category } from "./pages/Category/Category";
import { About } from "./pages/About/About";
// import User from "./User";
import { MainPage } from "./pages/Main/MainPage";
import { Login } from "./pages/Login/Login";

export const routes = (isLoggedIn: boolean): Array<RouteObject> => [
    {
        path: "/",
        element: isLoggedIn ? <MainPage /> : <Navigate to={"/login"} />,
        children: [
            { path: "/list", element: <List /> },
            { path: "/category", element: <Category /> },
            { path: "about", element: <About /> },
            // { path: "user", element: <User /> },
        ],
    },
    {
        path: "/login",
        element: isLoggedIn ? <Navigate to={"/"} /> : <Login />,
    },
];

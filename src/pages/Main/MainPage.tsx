import React from "react";
import { NavBar } from "../../components/navBar/NavBar";
import { Outlet } from "react-router-dom";

interface MainPageProps {
    children?: React.ReactNode;
}

export const MainPage: React.FC<MainPageProps> = ({ children }) => {
    return (
        <div>
            <NavBar />
            {children}
            <Outlet />
        </div>
    );
};

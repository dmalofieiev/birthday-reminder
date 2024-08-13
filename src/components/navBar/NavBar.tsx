import React from "react";
import styles from "./NavBar.module.css";
import { Link } from "react-router-dom";
import Avatar from "@mui/material/Avatar";

export const NavBar: React.FC = () => {
    return (
        <div className={styles.header}>
            <div className={styles.text}>
                <Link to="/list">List</Link>
            </div>
            <div className={styles.text}>
                <Link to="/category">Category</Link>
            </div>
            <div className={styles.text}>
                <Link to="/about">About Us</Link>
            </div>
            <div className={styles.avatar}>
                <Link to="/user">
                    <Avatar alt="User" src="/public/31.jpg" />
                </Link>
            </div>
        </div>
    );
};

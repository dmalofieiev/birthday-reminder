import React from "react";
import styles from "./About.module.css";

interface User {
    name: string;
    role: string;
    photo: string;
}

const users: User[] = [
    {
        name: "Dimasik `LOVE`lasik - Developer",
        role: "Developer",
        photo: "public/dimas.jpg",
    },
    {
        name: "Vaduha Designer",
        role: "Designer",
        photo: "public/vad.jpg",
    },
];

export const About: React.FC = () => {
    return (
        <div className={styles.container}>
            {users.map((user, index) => (
                <div key={index} className={styles.card}>
                    <img
                        src={user.photo}
                        alt={user.name}
                        className={styles.photo}
                    />
                    <div className={styles.info}>
                        <h2 className={styles.name}>{user.name}</h2>
                        <h3 className={styles.role}>{user.role}</h3>
                    </div>
                </div>
            ))}
        </div>
    );
};

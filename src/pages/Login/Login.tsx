import { ButtonLogin } from "../../components/login/ButtonLogin";
import { ForgotPassword } from "../../components/login/ForgotPassword";
import { InputLogin } from "../../components/login/InputLogin";
import { useState } from "react";
import { SingUp } from "../SingUp/SingUp";
import { IUserData } from "../../types/interfaces";

import styles from './Login.module.css'


export const Login: React.FC = () => {
  const [userEmail, setUserEmail] = useState<string>();
  const [userPassword, setUserPassword] = useState<string>();
  const [openSingUpModal, setOpenSingUpModal] = useState<boolean>(false);

  const handleModalOpen = () => {
    setOpenSingUpModal(true);
  };

  const handleLogIn = async () => {
    try {
      const response = await fetch("http://localhost:3000/users");
      if (!response.ok) throw new Error("Failed to fetch users");
      const users = await response.json();
      const user = users.find(
        (user: IUserData) =>
          user.email === userEmail && user.password === userPassword
      );
      if (user) {
        console.log("Logged in user:", user);
      } else {
        console.log("Invalid email or password");
      }
    } catch (error) {
      console.error("Error:", error);
    }
    setUserEmail("");
    setUserPassword("");
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Log in</h1>
      <div className={styles.inputWrapper}>
        <InputLogin
          type="email"
          setUserData={setUserEmail}
          userData={userEmail}
        />
      </div>
      <div className={styles.inputWrapper}>
        <InputLogin
          type="password"
          setUserData={setUserPassword}
          userData={userPassword}
        />
      </div>
      <div className={styles.buttonWrapper}>
        <ButtonLogin onLogIn={handleLogIn} />
      </div>
      <div className={styles.forgotPasswordWrapper}>
        <ForgotPassword />
      </div>
      <p className={styles.registerText}>
        Don`t have an account?{" "}
        <a
          className={styles.registerLink}
          onClick={handleModalOpen}
        >
          Register
        </a>
      </p>
      <SingUp
        openSingUpModal={openSingUpModal}
        setOpenSingUpModal={setOpenSingUpModal}
      />
    </div>
  );
};



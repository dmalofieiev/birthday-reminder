import { ButtonLogin } from "../components/login/ButtonLogin";
import { ForgotPassword } from "../components/login/ForgotPassword";
import { InputLogin } from "../components/login/InputLogin";
import { useState } from "react";
import { SingUp } from "./SingUp";
import { IUserData } from "../types/interfaces";

const styles = {
  container: {
    display: "flex" as const,
    flexDirection: "column" as const,
    alignItems: "center" as const,
    justifyContent: "center" as const,
    height: "100vh",
    backgroundColor: "#f0f0f0",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
  },
  title: {
    marginBottom: "20px",
    color: "#333",
  },
  inputWrapper: {
    marginBottom: "15px",
  },
  buttonWrapper: {
    marginBottom: "15px",
  },
  forgotPasswordWrapper: {
    marginBottom: "15px",
  },
  registerText: {
    marginBottom: "15px",
  },
  registerLink: {
    color: "red",
    cursor: "pointer",
    textDecoration: "none",
  },
};

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
    <div style={styles.container}>
      <h1 style={styles.title}>Log in</h1>
      <div style={styles.inputWrapper}>
        <InputLogin
          type="email"
          setUserData={setUserEmail}
          userData={userEmail}
        />
      </div>
      <div style={styles.inputWrapper}>
        <InputLogin
          type="password"
          setUserData={setUserPassword}
          userData={userPassword}
        />
      </div>
      <div style={styles.buttonWrapper}>
        <ButtonLogin onLogIn={handleLogIn} />
      </div>
      <div style={styles.forgotPasswordWrapper}>
        <ForgotPassword />
      </div>
      <p style={styles.registerText}>
        Don`t have an account?{" "}
        <a
          style={styles.registerLink}
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



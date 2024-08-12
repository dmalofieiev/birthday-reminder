import { ButtonLogin } from "../components/login/ButtonLogin";
import { ForgotPassword } from "../components/login/ForgotPassword";
import { InputLogin } from "../components/login/InputLogin";
import { useState } from "react";
import { SingUp } from "./SingUp";
import { IUserData } from "../types/interfaces";

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
        // Redirect or update the UI as needed
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
    <div>
      <h1>Log in</h1>
      <InputLogin
        type="email"
        setUserData={setUserEmail}
        userData={userEmail}
      />
      <InputLogin
        type="password"
        setUserData={setUserPassword}
        userData={userPassword}
      />
      <ButtonLogin onLogIn={handleLogIn} /> <br />
      <ForgotPassword />
      <p>
        Don`t have an account?{" "}
        <a
          style={{ color: "red", cursor: "pointer" }}
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

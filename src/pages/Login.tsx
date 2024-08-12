import { ButtonLogin } from "../components/login/ButtonLogin";
import { ForgotPassword } from "../components/login/ForgotPassword";
import { InputLogin } from "../components/login/InputLogin";
import { useState } from 'react';
import { SingUp } from "./SingUp";



export const Login: React.FC = () => {
  const [userEmail, setUserEmail] = useState<string>()
  const [userPassword, setUserPassword] = useState<string>()


  
  const handleSave = () => { 
    setUserEmail('')
    setUserPassword('')
  }

  return (
    <div >
      <h1>Log in</h1>
      <InputLogin type="email" setUserData={setUserEmail} userData={userEmail} />
      <InputLogin type="password" setUserData={setUserPassword} userData={userPassword} />
      <ButtonLogin onSave={handleSave}/> <br />
      <ForgotPassword />

      <p>Don`t have an account? <a>Registration</a></p>


    <SingUp />
    </div>
  );
};

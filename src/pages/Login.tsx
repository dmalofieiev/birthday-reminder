import { ForgotPassword } from "../components/login/ForgotPassword";
import { InputLogin } from "../components/login/InputLogin";

export const Login = () => {
  return (
    <div>
      <h1>Log in</h1>
      <InputLogin type="email" />
      <InputLogin type="password" />
      <ForgotPassword />
    </div>
  );
};

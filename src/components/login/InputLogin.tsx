import Input from "@mui/joy/Input";
import { iInputLogin } from "../../types/interfaces";

export const InputLogin: React.FC<iInputLogin> = ({
  type,
  setUserData,
  userData,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setUserData(e.target.value);
  };

  return (
    <Input
      type={type}
      placeholder={type === "email" ? "Email" : "Password"}
      value={userData ?? ""}
      onChange={handleChange}
      size="lg"
    />
  );
};

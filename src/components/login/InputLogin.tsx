import React, { useState } from "react";
import Input from "@mui/joy/Input";

interface iProps {
  type: string;
}

export const InputLogin: React.FC<iProps> = ({ type }) => {
  const [userMail, setUserMail] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setUserMail(e.target.value);
  };

  return (
    <Input
      type={type}
      placeholder={type === "email" ? "Email" : "Password"}
      value={userMail}
      onChange={handleChange}
      size="lg"
    />
  );
};

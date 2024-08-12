import { Button } from "@mui/material";
import React from "react";
import { IButtonProps } from "../../types/interfaces";

export const ButtonLogin: React.FC<IButtonProps> = ({ onLogIn }) => {
  return (
    <Button variant="outlined" onClick={onLogIn}>
      Log In
    </Button>
  );
};

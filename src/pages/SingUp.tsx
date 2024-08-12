import { useState } from "react";
import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import { ISingUp, IUserData } from "../types/interfaces";
import { v4 as uuidv4 } from "uuid";

export const SingUp: React.FC<ISingUp> = ({
  openSingUpModal,
  setOpenSingUpModal,
}) => {
  const initialUserData: IUserData = {
    name: "",
    surName: "",
    email: "",
    password: "",
    dateOfBirth: "",
  };

  const [newUserData, setNewUserData] = useState<IUserData>(initialUserData);

  const handleCloseModal = () => {
    setOpenSingUpModal(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewUserData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSetData = async () => {
    const uniqueId = uuidv4();
    const newUser = { ...newUserData, id: uniqueId };
    try {
      const response = await fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      });
      if (response.ok) {
        const createdUser = await response.json();
        console.log("User created:", createdUser);
      } else {
        console.error("Failed to create user:", response.statusText);
      }
    } catch (error) {
      console.error(error);
    }
    handleCloseModal();
    setNewUserData(initialUserData);
  };

  return (
    <Box>
      <Dialog
        open={openSingUpModal}
        sx={{
          "& .MuiTextField-root": {
            width: "500px",
            marginBottom: "16px",
          },
        }}
      >
        <DialogContent>
          <DialogTitle>Registration</DialogTitle>
          <h4>Name</h4>
          <TextField
            name="name"
            type="text"
            placeholder="Имя"
            required
            value={newUserData.name}
            onChange={handleInputChange}
          />
          <h4>Sur name</h4>
          <TextField
            name="surName"
            type="text"
            placeholder="Фамилия"
            required
            value={newUserData.surName}
            onChange={handleInputChange}
          />
          <h4>Email</h4>
          <TextField
            name="email"
            type="email"
            placeholder="Email"
            required
            value={newUserData.email}
            onChange={handleInputChange}
          />
          <h4>Password</h4>
          <TextField
            name="password"
            type="password"
            placeholder="Password"
            required
            value={newUserData.password}
            onChange={handleInputChange}
          />
          <h4>Date of birth</h4>
          <TextField
            name="dateOfBirth"
            type="date"
            placeholder="Дата Рождения"
            required
            value={newUserData.dateOfBirth}
            onChange={handleInputChange}
          />
        </DialogContent>
        <Button onClick={handleSetData}>Sing Up</Button>
        <Button onClick={handleCloseModal}>Cancel</Button>
      </Dialog>
    </Box>
  );
};

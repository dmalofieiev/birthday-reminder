import {
    Box,
    Button,
    Dialog,
    DialogContent,
    DialogTitle,
    TextField,
} from "@mui/material";
import { ICreateUsers, IUserData } from "../../types/interfaces";
import { useCallback, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const CreateUsers: React.FC<ICreateUsers> = ({
    isCreateSet,
    createData,
}) => {
    const initialUserData: IUserData = {
        name: "",
        surName: "",
        email: "",
        password: "",
        dateOfBirth: "",
        category: "",
        id: "",
    };

    const [newUserData, setNewUserData] = useState<IUserData>(initialUserData);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setNewUserData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleCloseModal = useCallback(() => {
        isCreateSet(false);
    }, [isCreateSet]);

    const handleCreateData = useCallback(async (): Promise<void> => {
        const uniqueId = uuidv4();
        const newUser = { ...newUserData, id: uniqueId };
        await createData(newUser);
        handleCloseModal();
    }, [createData, handleCloseModal, newUserData]);

    return (
        <Box>
            <Dialog
                open={true}
                sx={{
                    "& .MuiTextField-root": {
                        width: "500px",
                        marginBottom: "16px",
                    },
                }}
            >
                <DialogContent>
                    <DialogTitle>Create New Member</DialogTitle>
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
                    />{" "}
                    <h4>Category</h4>
                    <TextField
                        name="category"
                        type="text"
                        placeholder="category"
                        required
                        value={newUserData.category}
                        onChange={handleInputChange}
                    />
                </DialogContent>
                <Button onClick={handleCreateData}>Create</Button>
                <Button onClick={handleCloseModal}>Cancel</Button>
            </Dialog>
        </Box>
    );
};

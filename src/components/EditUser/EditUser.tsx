import React, { useCallback, useState } from "react";
import { useEditDataMutation } from "../../api/api";
import { ItemEditProps } from "../../types/interfaces";
import {
    Box,
    Button,
    Dialog,
    DialogContent,
    DialogTitle,
    TextField,
} from "@mui/material";

export const EditUser: React.FC<ItemEditProps> = ({ user, setEdit }) => {
    const [editUser] = useEditDataMutation();
    const [formData, setFormData] = useState(user);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleCloseModal = useCallback(() => {
        setEdit(false);
    }, [setEdit]);

    const handleSubmit = async () => {
        await editUser({ ...formData });
        handleCloseModal();
    };

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
                    <DialogTitle>Edit</DialogTitle>
                    <h4>Name</h4>
                    <TextField
                        name="name"
                        type="text"
                        placeholder="Имя"
                        required
                        value={formData.name}
                        onChange={handleChange}
                    />
                    <h4>Sur name</h4>
                    <TextField
                        name="surName"
                        type="text"
                        placeholder="Фамилия"
                        required
                        value={formData.surName}
                        onChange={handleChange}
                    />
                    <h4>Email</h4>
                    <TextField
                        name="email"
                        type="email"
                        placeholder="Email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                    />
                    <h4>Date of birth</h4>
                    <TextField
                        name="dateOfBirth"
                        type="date"
                        placeholder="Дата Рождения"
                        required
                        value={formData.dateOfBirth}
                        onChange={handleChange}
                    />{" "}
                    <h4>Category</h4>
                    <TextField
                        name="category"
                        type="text"
                        placeholder="category"
                        required
                        value={formData.category}
                        onChange={handleChange}
                    />
                </DialogContent>
                <Button onClick={handleSubmit}>Save</Button>
                <Button onClick={handleCloseModal}>Cancel</Button>
            </Dialog>
        </Box>
    );
};

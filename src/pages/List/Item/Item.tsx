import { useDeleteDataMutation } from "../../../api/api";
import { ItemProps } from "./../../../types/interfaces";
import styles from "./Item.module.css";
import { useCallback } from "react";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";
import { ButtonWrapper, IconButton } from "../../../styles/styles";

export const Item: React.FC<ItemProps> = ({ user, openEditModal }) => {
    const [deleteUserData] = useDeleteDataMutation();

    const handleDeleteUser = useCallback(
        async (id: string) => {
            await deleteUserData({
                ...user,
                id: id,
            });
        },
        [deleteUserData, user]
    );

    return (
        <div className={styles.item}>
            <div className={styles.field}>{user.name}</div>
            <div className={styles.field}>{user.surName}</div>
            <div className={styles.field}>{user.email}</div>
            <div className={styles.field}>{user.dateOfBirth}</div>

            <div className={styles.actions}>
                <ButtonWrapper>
                    <IconButton onClick={() => openEditModal(user)}>
                        <EditIcon color="primary" />
                    </IconButton>
                    <IconButton onClick={() => handleDeleteUser(user.id)}>
                        <DeleteForeverIcon color="error" />
                    </IconButton>
                </ButtonWrapper>
            </div>
        </div>
    );
};

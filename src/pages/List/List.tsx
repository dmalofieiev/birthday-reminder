import { useEffect, useState } from "react";
import { useCreateDataMutation, useGetDataQuery } from "../../api/api";
import { IUserData } from "../../types/interfaces";
import { Item } from "./Item/Item";
import styles from "./List.module.css";
import { CreateUsers } from "./../../components/CreateUsers/CreateUsers";
import { EditUser } from "../../components/EditUser/EditUser";

export const List: React.FC = () => {
    const { data: users = [] } = useGetDataQuery();
    const [dataUsers, setDataUsers] = useState<IUserData[]>(users);
    const [isCreating, setIsCreating] = useState<boolean>(false);
    const [isEdit, setEdit] = useState<boolean>(false);
    const [editingUser, setEditingUser] = useState<IUserData | null>(null);

    const [createNewData] = useCreateDataMutation();

    useEffect(() => {
        setDataUsers(users);
    }, [users]);

    const openEditModal = (user: IUserData) => {
        setEditingUser(user);
        setEdit(true);
    };

    return (
        <div className={styles.container}>
            <button
                className={styles.createButton}
                onClick={() => setIsCreating(!isCreating)}
            >
                Create New User
            </button>
            <div className={styles.userList}>
                {dataUsers.map((user: IUserData) => (
                    <div key={user.id}>
                        <Item user={user} openEditModal={openEditModal} />
                    </div>
                ))}
            </div>

            {isCreating && (
                <CreateUsers
                    isCreateSet={setIsCreating}
                    createData={createNewData}
                />
            )}

            {isEdit && editingUser && (
                <EditUser setEdit={setEdit} user={editingUser} />
            )}
        </div>
    );
};

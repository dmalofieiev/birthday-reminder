import { useEffect, useState } from "react";
import { useCreateDataMutation, useGetDataQuery } from "../../api/api";
import { IUserData } from "../../types/interfaces";
import Item from "./Item/Item";
import styles from "./List.module.css";
import { CreateUsers } from "./../../components/CreateUsers/CreateUsers";

export const List: React.FC = () => {
    const { data: users = [] } = useGetDataQuery();
    const [dataUsers, setDataUsers] = useState<IUserData[]>([]);
    const [isCreating, setIsCreating] = useState<boolean>(false);

    useEffect(() => {
        setDataUsers(users);
    }, [users]);

    {
        /* Create directory */
    }
    const [createNewData] = useCreateDataMutation();

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
                        <Item user={user} />
                    </div>
                ))}
            </div>

            {isCreating && (
                <CreateUsers
                    isCreateSet={setIsCreating}
                    createData={createNewData}
                />
            )}
        </div>
    );
};

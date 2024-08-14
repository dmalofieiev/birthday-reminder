import { useGetDataQuery } from "../../api/api";
import { ButtonWrapper, IconButton } from "../../styles/styles";
import { IUserData } from "../../types/interfaces";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";
import styles from "./Category.module.css";

export const Category: React.FC = () => {
    const { data: users = [] } = useGetDataQuery();

    return (
        <div className={styles.container}>
            <button className={styles.createButton}>Create Category</button>
            <div>
                {users.map((el: IUserData) => (
                    <div key={el.id} className={styles.item}>
                        <div className={styles.field}>{el.category}</div>

                        <div className={styles.actions}>
                            <ButtonWrapper>
                                <IconButton>
                                    <EditIcon color="primary" />
                                </IconButton>
                                <IconButton>
                                    <DeleteForeverIcon color="error" />
                                </IconButton>
                            </ButtonWrapper>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

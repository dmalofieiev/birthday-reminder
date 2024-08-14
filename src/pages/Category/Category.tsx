import { useGetDataQuery } from "../../api/api";
import { IGetUser } from "../../types/interfaces";
import styles from "./Category.module.css";

export const Category: React.FC = () => {
    const { data: users = [] } = useGetDataQuery();

    return (
        <div className={styles.container}>
            <button className={styles.createButton}>Create Category</button>
            <div>
                {users.map((el: IGetUser) => (
                    <div key={el.id}>
                        <em>{el.category}</em>
                    </div>
                ))}
            </div>
        </div>
    );
};

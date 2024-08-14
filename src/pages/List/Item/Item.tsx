import { IUserData } from "./../../../types/interfaces";
import styles from "./Item.module.css";

interface ItemProps {
    user: IUserData;
}

export default function Item({ user }: ItemProps) {
    return (
        <div className={styles.item}>
            <div className={styles.field}>{user.name}</div>
            <div className={styles.field}>{user.surName}</div>
            <div className={styles.field}>{user.email}</div>
            <div className={styles.field}>{user.dateOfBirth}</div>

            <div className={styles.actions}>
                <div>🔧</div>
                <div>❌</div>
            </div>
        </div>
    );
}

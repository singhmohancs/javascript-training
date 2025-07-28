import { useParams } from "react-router";
import styles from "./styles.module.css";

export default function UpdateUserPage() {
    const params = useParams();
    return (
        <div className={styles.updateUser}>
            <h1>Update User - {params.userId}</h1>
        </div>
    )
}
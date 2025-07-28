import { useParams } from "react-router";
import styles from "./styles.module.css";

export default function ViewUserPage() {
	const { user_id } = useParams();
	console.log(user_id);
    return (
        <div className={styles.viewUser}>
            <h1>View User {user_id}</h1>
        </div>
    )
}
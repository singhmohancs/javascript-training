import { useParams } from "react-router";
import styles from "./styles.module.css";

export default function ViewUserPage() {
	const params = useParams(); // userId is the parameter name in the URL
	console.log(params);
    return (
        <div className={styles.viewUser}>
            <h1>View User {params.userId}</h1>
        </div>
    )
}
import { useState } from "react";
import styles from "./style.module.css";

export default function TodoForm({ onFormSubmitted }) {
	const [title, setTitle] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		onFormSubmitted(title);
		setTitle("");
	}

  return <div className={styles.todoFormContainer}>
	<form onSubmit={handleSubmit} className={styles.todoForm}>
		<input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
		<button type="submit"	>Add</button>
	</form>
  </div>;
}
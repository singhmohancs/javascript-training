import { useState, useEffect } from "react";
import { TodoForm, TodoList } from "./components";
import styles from "./style.module.css";
import { WebDatabase } from "../../utils/webDatabase";
import { DATABASE_KEYS } from "../../constants/database-keys";


export default function TodoPage() {
  const [todos, setTodos] = useState([]);

	const onFormSubmittedHandler = (title) => {
		const newTodo = { id: todos.length + 1, title, completed: false };

		const newTodos = [newTodo, ...todos];

		setTodos(newTodos);

		WebDatabase.setItem(DATABASE_KEYS.TODOS, newTodos);
	}

	useEffect(() => {
		const todos = WebDatabase.getItem(DATABASE_KEYS.TODOS);
		if(todos){
			setTodos(todos);
		}
	}, []);

  return <div className={styles.todoPage}>
	<h1>Todo List</h1>
	<TodoForm onFormSubmitted={onFormSubmittedHandler} />
	<TodoList todos={todos} setTodos={setTodos} />
	
  </div>;
}
import TodoForm from "components/Modern-Style/TodoForm/TodoForm";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	deleteTodo,
	getTodos,
	markComplete,
} from "store/Modern-Style/slices/todoSlice";

Todos.propTypes = {};

function Todos(props) {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getTodos());
	}, [dispatch]);

	const onChangeCompleted = (id) => {
		dispatch(markComplete(id));
	};

	const onDeleteTodo = (id) => {
		dispatch(deleteTodo(id));
	};

	const todos = useSelector((state) => state.todos.todos);

	return (
		<div className="todo-list">
			<TodoForm />
			<ul>
				{todos.map((todo) => (
					<li key={todo.id} className={todo.completed ? "completed" : ""}>
						{todo.title}
						<input
							type="checkbox"
							onChange={() => onChangeCompleted(todo.id)}
							checked={todo.completed}
						/>
						<button onClick={() => onDeleteTodo(todo.id)}>Delete</button>
					</li>
				))}
			</ul>
		</div>
	);
}

export default Todos;

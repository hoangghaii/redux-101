import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "store/Modern-Style/slices/todoSlice";
import { v4 as uuidv4 } from "uuid";

TodoForm.propTypes = {};

function TodoForm(props) {
	const [title, setTitle] = useState("");

	const dispatch = useDispatch();

	const onFormSubmit = (event) => {
		event.preventDefault();
		dispatch(addTodo({ id: uuidv4(), title: title, completed: false }));
	};

	return (
		<div>
			<form onSubmit={(event) => onFormSubmit(event)}>
				<input
					type="text"
					value={title}
					onChange={(event) => setTitle(event.target.value)}
				/>
				<input type="submit" value="Add" />
			</form>
		</div>
	);
}

export default TodoForm;

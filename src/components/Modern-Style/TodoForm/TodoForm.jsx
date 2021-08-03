import PropTypes from "prop-types";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

TodoForm.propTypes = {};

function TodoForm(props) {
	const {} = props;

	const [title, setTitle] = useState("");

	const onFormSubmit = (event) => {
		event.preventDefault();
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

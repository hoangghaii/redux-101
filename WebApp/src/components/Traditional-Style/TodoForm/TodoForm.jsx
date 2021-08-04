import PropTypes from "prop-types";
import React, { useState } from "react";
import { connect } from "react-redux";
import { addTodo } from "store/Tradional-Style/actions/todoAction";
import { v4 as uuidv4 } from "uuid";

TodoForm.propTypes = {
	addTodo: PropTypes.func.isRequired,
};

function TodoForm(props) {
	const { addTodo } = props;

	const [title, setTitle] = useState("");

	const onFormSubmit = (event) => {
		event.preventDefault();
		addTodo({
			id: uuidv4(),
			title: title,
			completed: false,
		});
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

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, { addTodo })(TodoForm);

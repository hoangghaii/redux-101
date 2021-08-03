import React from "react";
import PropTypes from "prop-types";

TodoForm.propTypes = {};

function TodoForm(props) {
	return (
		<div>
			<form>
				<input type="text" />
				<input type="submit" value="Add" />
			</form>
		</div>
	);
}

export default TodoForm;

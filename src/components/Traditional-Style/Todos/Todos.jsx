import PropTypes from "prop-types";
import React from "react";
import { connect } from "react-redux";
import TodoForm from "../TodoForm/TodoForm";

Todos.propTypes = {
	todos: PropTypes.array.isRequired,
};

function Todos(props) {
	const { todos } = props;

	return (
		<div className="todo-list">
			<TodoForm />
			<ul>
				{todos.map((todo) => (
					<li key={todo.id}>
						{todo.title}
						<input type="checkbox" />
						<button>Delete</button>
					</li>
				))}
			</ul>
		</div>
	);
}

const mapStateToProps = (state) => ({ todos: state.myTodos.todos });

export default connect(mapStateToProps, {})(Todos);

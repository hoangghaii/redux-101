import {
	markComplete,
	deleteTodo,
	getTodos,
} from "store/Tradional-Style/actions/todoAction";
import TodoForm from "components/Traditional-Style/TodoForm/TodoForm";
import PropTypes from "prop-types";
import React, { useEffect } from "react";
import { connect } from "react-redux";

Todos.propTypes = {
	todos: PropTypes.array.isRequired,
	markComplete: PropTypes.func.isRequired,
	deleteTodo: PropTypes.func.isRequired,
	getTodos: PropTypes.func.isRequired,
};

function Todos(props) {
	const { todos, markComplete, deleteTodo, getTodos } = props;

	useEffect(() => {
		getTodos();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div className="todo-list">
			<TodoForm />
			<ul>
				{todos.map((todo) => (
					<li key={todo.id} className={todo.completed ? "completed" : ""}>
						{todo.title}
						<input
							type="checkbox"
							onChange={() => markComplete(todo.id)}
							checked={todo.completed}
						/>
						<button onClick={() => deleteTodo(todo.id)}>Delete</button>
					</li>
				))}
			</ul>
		</div>
	);
}

const mapStateToProps = (state) => ({ todos: state.myTodos.todos });

export default connect(mapStateToProps, { markComplete, deleteTodo, getTodos })(
	Todos
);

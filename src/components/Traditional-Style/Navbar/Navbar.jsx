import PropTypes from "prop-types";
import React from "react";
import { connect } from "react-redux";

Navbar.propTypes = {
	todos: PropTypes.array.isRequired,
};

function Navbar(props) {
	const { todos } = props;

	return (
		<div className="navbar">
			<h1>My Redux Todos app (Tradional Style)</h1>
			<ul>
				<li>Home</li>
				<li>About</li>
				<li>Total todos: {todos.length}</li>
			</ul>
		</div>
	);
}

const mapStateToProps = (state) => ({ todos: state.myTodos.todos });

export default connect(mapStateToProps, {})(Navbar);

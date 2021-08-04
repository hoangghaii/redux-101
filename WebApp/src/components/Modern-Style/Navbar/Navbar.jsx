import React from "react";
import { useSelector } from "react-redux";

Navbar.propTypes = {};

function Navbar(props) {
	const todos = useSelector((state) => state.todos.todos);

	return (
		<div className="navbar">
			<h1>My Redux Todos app (Modern Style)</h1>
			<ul>
				<li>Home</li>
				<li>About</li>
				<li>Total todos: {todos.length}</li>
			</ul>
		</div>
	);
}

export default Navbar;

import PropTypes from "prop-types";
import React from "react";

Navbar.propTypes = {};

function Navbar(props) {
	const {} = props;

	return (
		<div className="navbar">
			<h1>My Redux Todos app (Modern Style)</h1>
			<ul>
				<li>Home</li>
				<li>About</li>
				<li>Total todos: </li>
			</ul>
		</div>
	);
}

export default Navbar;

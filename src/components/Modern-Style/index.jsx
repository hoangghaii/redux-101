import Navbar from "components/Modern-Style/Navbar/Navbar";
import Todos from "components/Modern-Style/Todos/Todos";
import React, { Fragment } from "react";

function ModernStyle(props) {
	return (
		<Fragment>
			<Navbar />
			<Todos />
		</Fragment>
	);
}

export default ModernStyle;

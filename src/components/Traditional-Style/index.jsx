import Navbar from "components/Traditional-Style/Navbar/Navbar";
import Todos from "components/Traditional-Style/Todos/Todos";
import React, { Fragment } from "react";

function TradionalStyle(props) {
	return (
		<Fragment>
			<Navbar />
			<Todos />
		</Fragment>
	);
}

export default TradionalStyle;

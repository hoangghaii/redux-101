import ModernStyle from "components/Modern-Style";
import TradionalStyle from "components/Traditional-Style";
import { Fragment } from "react";
import { Provider } from "react-redux";
import modernStore from "store/Modern-Style/store";
import tradionalStore from "store/Tradional-Style/store";
import "./App.css";

function App() {
	return (
		<Fragment>
			<Provider store={tradionalStore}>
				<div className="App">
					<TradionalStyle />
				</div>
			</Provider>
			<br />
			<Provider store={modernStore}>
				<div className="App">
					<ModernStyle />
				</div>
			</Provider>
		</Fragment>
	);
}

export default App;

import Navbar from "components/Traditional-Style/Navbar/Navbar";
import Todos from "components/Traditional-Style/Todos/Todos";
import { Provider } from "react-redux";
import store from "store/store";
import "./App.css";

function App() {
	return (
		<Provider store={store}>
			<div className="App">
				<Navbar />
				<Todos />
			</div>
		</Provider>
	);
}

export default App;

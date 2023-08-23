import { BrowserRouter } from "react-router-dom";
import { store } from "./store";
import { Provider } from "react-redux";
import Router from "./components/MainContent/Router";
import ModalMainBlock from "./components/UI/Modal/components/ModalMainBlock/ModalMainBlock";

import "./App.scss";

function App(): JSX.Element {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<Router />
				<ModalMainBlock />
			</BrowserRouter>
		</Provider>
	);
}

export default App;

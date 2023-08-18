import { BrowserRouter } from "react-router-dom";
import { MainContext, defaultContext } from "./context";
import { store } from "./store";
import { Provider } from "react-redux";
import Router from "./components/MainContent/Router";
import ModalMainBlock from "./components/UI/Modal/components/ModalMainBlock/ModalMainBlock";

// import "./App.scss";

function App(): JSX.Element {
	// const [modalState, setModalState] = useState(defaultContext.modalState); //состояние для переиспользуемого модального окна

	return (
		// <MainContext.Provider
		// 	value={{
		// 		modalState,
		// 		setModalState,
		// 	}}
		// >
		<Provider store={store}>
			<BrowserRouter>
				<Router />
				{/* <ModalMainBlock modalState={modalState} setModalState={setModalState} /> */}
			</BrowserRouter>
		</Provider>
		// </MainContext.Provider>
	);
}

export default App;

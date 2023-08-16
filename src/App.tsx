import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { MainContext, defaultContext } from "./context";

import Router from "./components/MainContent/Router";
import ModalMainBlock from "./components/UI/Modal/components/ModalMainBlock/ModalMainBlock";

// import './App.scss';

function App(): JSX.Element {
	const [modalState, setModalState] = useState(defaultContext.modalState); //состояние для переиспользуемого модального окна

	return (
		<MainContext.Provider
			value={{
				modalState,
				setModalState,
			}}
		>
			<BrowserRouter>
				<Router />
				<ModalMainBlock modalState={modalState} setModalState={setModalState} />
			</BrowserRouter>
		</MainContext.Provider>
	);
}

export default App;

import { useCallback, useEffect } from "react";
import { createPortal } from "react-dom";
import { ComponentsList } from "../../../../../constants/modalList";

import ModalContainer from "../ModalContainer/ModalContainer";

export default function ModalMainBlock({ modalState, setModalState }) {
	const closeModal = useCallback(() => {
		//функция для закрытия модального окна путем смены состояния и обнулении id компонента
		setModalState(prev => ({
			...prev,
			idModal: "",
		}));
	}, [setModalState]);

	useEffect(() => {
		// слушатель для закрытия окна по esc
		const closeKey = event => {
			if (event.keyCode === 27) {
				closeModal();
			}
		};
		document.addEventListener("keyup", closeKey);

		return () => document.removeEventListener("keyup", closeKey);
	}, [closeModal]);

	if (modalState.idModal === "") {
		//проверка отрисовки модалки в DOM
		return null;
	}

	return createPortal(
		<ModalContainer closeModal={closeModal}>
			{ComponentsList[modalState.idModal]}
		</ModalContainer>,
		document.getElementById("modal")
	);
}

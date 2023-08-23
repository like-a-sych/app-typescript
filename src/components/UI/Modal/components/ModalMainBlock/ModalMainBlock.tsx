import { useEffect } from "react";
import { createPortal } from "react-dom";
import { ComponentsList } from "../../../../../constants/modalList";
import { closeModal } from "../../../../../store/features/ModalSlice";
import ModalContainer from "../ModalContainer/ModalContainer";
import { useAppDispatch, useAppSelector } from "../../../../../store/hooks";

export default function ModalMainBlock() {
	const dispatch = useAppDispatch();

	const modalId = useAppSelector(state => state.modal.idModal);

	useEffect(() => {
		// слушатель для закрытия окна по esc
		const closeKey = (event: any) => {
			if (event.keyCode === 27) {
				dispatch(closeModal());
			}
		};
		document.addEventListener("keyup", closeKey);

		return () => document.removeEventListener("keyup", closeKey);
	}, [dispatch]);

	if (modalId === "") {
		//проверка отрисовки модалки в DOM
		return null;
	}

	return createPortal(
		<ModalContainer>{ComponentsList[modalId]}</ModalContainer>,

		document.getElementById("modal") as Element | DocumentFragment
	);
}

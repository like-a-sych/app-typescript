import { useContext } from "react";
import { MainContext } from "../../../../../context";
import style from "./AddItemButton.module.scss";

interface iAddItem {
	text: string;
}

export default function AddItem({ text }: iAddItem) {
	const { setModalState } = useContext(MainContext);

	// function addButton() {
	// 	//TODO: сделать передачу любого id модалки
	// 	setModalState("addSale");
	// }

	return (
		<button
			// onClick={addButton}
			className={style["add-item__button"]}
			type="button"
		>
			{text}
		</button>
	);
}

import style from "./ModalButton.module.scss";

export default function ModalButton({ textButton, click }) {
	return (
		<div className={style["header-button__item"]}>
			<button type="button" onClick={click}>
				{textButton}
			</button>
		</div>
	);
}

import style from "./InputDelete.module.scss";

export default function InputDeleteBlock({
	value1,
	value2,
	placeholder1,
	placeholder2,
	deleteRowButton,
	id,
	disable,
}) {
	function getRow() {
		deleteRowButton(id);
	}
	return (
		<>
			<input
				className={style["input"]}
				type="text"
				defaultValue={value1}
				placeholder={placeholder1}
				onChange={() => {}} // TODO: fix mock callback
			></input>
			<input
				className={style["input"]}
				type="text"
				defaultValue={value2}
				placeholder={placeholder2}
				onChange={() => {}} // TODO: fix mock callback
			></input>
			<button
				disabled={disable}
				id={id}
				type="button"
				className={style["button-delete"]}
				onClick={getRow}
			></button>
		</>
	);
}

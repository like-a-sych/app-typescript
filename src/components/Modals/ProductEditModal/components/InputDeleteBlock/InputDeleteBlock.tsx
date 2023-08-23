import style from "./InputDelete.module.scss";

interface IInputDeleteBlock {
	value1: string;
	value2: string;
	placeholder1: string;
	placeholder2: string;
	deleteRowButton: (id: string) => void;
	id: string;
	disable?: boolean;
}

export default function InputDeleteBlock({
	value1,
	value2,
	placeholder1,
	placeholder2,
	deleteRowButton,
	id,
	disable,
}: IInputDeleteBlock) {
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
				title="delete"
				disabled={disable}
				id={id}
				type="button"
				className={style["button-delete"]}
				onClick={getRow}
			></button>
		</>
	);
}

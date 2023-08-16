import style from "../Checkbox.module.scss";

interface ITheadCheckbox {
	isChecked: boolean;
	allClick: () => void;
}

export default function TheadCheckbox({
	isChecked,
	allClick,
}: ITheadCheckbox): JSX.Element {
	return (
		<th className={style["thead-checkbox"]}>
			<input
				placeholder="checkbox"
				checked={isChecked}
				type="checkbox"
				id="checkAll"
				className={style["content-sales-table__checkbox"]}
				onChange={allClick}
			/>
			<label
				className={style["content-sales-table__label"]}
				htmlFor="checkAll"
			></label>
		</th>
	);
}

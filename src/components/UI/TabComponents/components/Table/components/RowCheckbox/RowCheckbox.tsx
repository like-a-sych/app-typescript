import style from "../Checkbox.module.scss";

interface IRowCheckbox {
	isChecked: boolean | undefined;
	checkboxHandler: (id: string) => void | undefined;
	id: string;
}

export default function RowCheckbox({
	isChecked,
	checkboxHandler,
	id,
}: IRowCheckbox): JSX.Element {
	function stopProp(e: React.MouseEvent) {
		e.stopPropagation();
	}

	function clickCheckbox() {
		checkboxHandler(id);
	}

	return (
		<td onClick={stopProp}>
			<div className={style["content-sales-table__wrapper"]}>
				<input
					placeholder="checkbox"
					checked={isChecked}
					type="checkbox"
					id={id}
					className={style["content-sales-table__checkbox"]}
					onChange={clickCheckbox}
				/>
				<label
					className={style["content-sales-table__label"]}
					htmlFor={id}
				></label>
			</div>
		</td>
	);
}

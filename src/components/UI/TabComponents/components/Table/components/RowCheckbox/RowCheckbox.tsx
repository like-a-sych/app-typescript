import style from "../Checkbox.module.scss";

interface IRowCheckbox {
	isChecked: boolean;
	clickCheckbox: () => void;
	id: string;
}

function stopProp(e: React.MouseEvent) {
	e.stopPropagation();
}

export default function RowCheckbox({
	isChecked,
	clickCheckbox,
	id,
}: IRowCheckbox): JSX.Element {
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

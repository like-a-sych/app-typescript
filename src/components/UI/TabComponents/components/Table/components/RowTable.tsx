import { memo } from "react";

import RowCheckbox from "./RowCheckbox/RowCheckbox";

import style from "../Table.module.scss";
import type { IColumns } from "../../../../../../interfaces/columns";

interface IRowTable {
	item: any;
	setModalState?: React.Dispatch<
		React.SetStateAction<{
			idModal: string;
			dataRow: {};
			isOpen: boolean;
			data: {};
		}>
	>;
	checkboxHandler: (id: string) => void;
	isChecked: boolean;
	idModal: string;
	columns: IColumns[];
	hasCheckbox: boolean;
	data: unknown[];
}

function RowTable({
	item,
	setModalState,
	checkboxHandler,
	isChecked,
	idModal,
	columns,
	hasCheckbox,
	data,
}: IRowTable): JSX.Element {
	const rowData: string[] = columns.map(element => element.selector(item));

	function clickBtn() {
		setModalState &&
			setModalState({
				isOpen: true,
				dataRow: item,
				idModal,
				data: data,
			});
	}

	function clickCheckbox() {
		checkboxHandler(item.id);
	}

	return (
		<tr className={isChecked ? style["_active"] : undefined} onClick={clickBtn}>
			{hasCheckbox && (
				<RowCheckbox
					isChecked={isChecked}
					id={item.id}
					clickCheckbox={clickCheckbox}
				/>
			)}
			{rowData.map((el, index) => {
				return <td key={`${index}-${Math.random()}`}>{el}</td>;
			})}
		</tr>
	);
}

export default memo(RowTable, (prevProps, nextProps) => {
	return prevProps.isChecked === nextProps.isChecked;
});

import { memo } from "react";

import RowCheckbox from "./RowCheckbox/RowCheckbox";

import style from "../Table.module.scss";

import type { IColumns } from "../../../../../../interfaces/columns";

interface IRowTable {
	dataRow: any;
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
	dataRow,
	setModalState,
	checkboxHandler,
	isChecked,
	idModal,
	columns,
	hasCheckbox,
	data,
}: IRowTable): JSX.Element {
	const rowData: string[] = columns.map(element => element.selector(dataRow));

	function clickBtn() {
		setModalState &&
			setModalState({
				isOpen: true,
				dataRow,
				idModal,
				data: data,
			});
	}

	function clickCheckbox() {
		checkboxHandler(dataRow.id);
	}

	return (
		<tr className={isChecked ? style["_active"] : undefined} onClick={clickBtn}>
			{hasCheckbox && (
				<RowCheckbox
					isChecked={isChecked}
					id={dataRow.id}
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

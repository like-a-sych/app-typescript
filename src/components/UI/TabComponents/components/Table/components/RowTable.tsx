import { memo, useCallback } from "react";
import { useDispatch } from "react-redux";
import { setModalState } from "../../../../../../store/features/ModalSlice";
import RowCheckbox from "./RowCheckbox/RowCheckbox";

import style from "../Table.module.scss";

import type { IColumns } from "../../../../../../interfaces/columns";

interface IRowTable {
	dataRow: any;
	columns: IColumns[];
	checkboxHandler?: (id: string) => void;
	isChecked?: boolean;
	idModal?: string | null;
}

function RowTable({
	dataRow,
	checkboxHandler,
	isChecked,
	idModal,
	columns,
}: IRowTable): JSX.Element {
	const rowData: string[] = columns.map(element => element.selector(dataRow));
	console.log();

	const dispatch = useDispatch();

	const openModalHandler = useCallback(() => {
		dispatch(
			setModalState({
				isOpen: true,
				idModal,
				id: dataRow.id,
			})
		);
	}, [dispatch]);

	return (
		<tr
			className={isChecked ? style["_active"] : undefined}
			onClick={openModalHandler}
		>
			{checkboxHandler && (
				<RowCheckbox
					isChecked={isChecked}
					id={dataRow.id}
					checkboxHandler={checkboxHandler}
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

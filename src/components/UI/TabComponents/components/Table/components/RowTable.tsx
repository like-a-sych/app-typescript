import { memo, useCallback } from "react";

import RowCheckbox from "./RowCheckbox/RowCheckbox";

import style from "../Table.module.scss";

import type { IColumns } from "../../../../../../interfaces/columns";
import { useDispatch } from "react-redux";
import { setModalState } from "../../../../../../store/features/ModalSlice";
import { setProducts } from "../../../../../../store/features/ProductSlice";

interface IRowTable {
	dataRow: any;
	checkboxHandler: (id: string) => void;
	isChecked: boolean;
	idModal: string;
	columns: IColumns[];
	hasCheckbox: boolean;
}

function RowTable({
	dataRow,
	checkboxHandler,
	isChecked,
	idModal,
	columns,
	hasCheckbox,
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

	function clickCheckbox() {
		checkboxHandler(dataRow.id);
	}

	return (
		<tr
			className={isChecked ? style["_active"] : undefined}
			onClick={openModalHandler}
		>
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

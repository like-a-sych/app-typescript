import { useTableCheckbox } from "../../../../../hooks/useTableCheckbox";
import TableHead from "./components/TableHead";
import RowTable from "./components/RowTable";
import PopUp from "../../../../Modals/PopUp/PopUp";

import style from "./Table.module.scss";
import type { IColumns } from "../../../../../interfaces/columns";

interface ITableProps {
	columns: IColumns[];
	hasCheckbox: boolean;
	data: unknown[];
	setModalState?: React.Dispatch<
		React.SetStateAction<{
			idModal: string;
			dataRow: {};
			isOpen: boolean;
			data: {};
		}>
	>;
	idModal: string;
}

export default function Table({
	columns,
	hasCheckbox,
	data,
	setModalState,
	idModal,
}: ITableProps): JSX.Element {
	const {
		allClick,
		isAllChecked,
		checkboxHandler,
		deleteCellTable,
		checkedItemsArray,
		openPopup,
		PopUpToggle,
	} = useTableCheckbox(data);
	return (
		<>
			<table className={style["content-sales-table"]}>
				<TableHead
					hasCheckbox={hasCheckbox}
					allClick={allClick}
					isChecked={isAllChecked}
					theadList={columns.map(i => i.name)}
				/>
				<tbody className={style["content-sales-table__body"]}>
					{data.map((item: any, index) => {
						const isChecked = checkedItemsArray.includes(item.id);
						return (
							<RowTable
								hasCheckbox={hasCheckbox}
								key={`id-${index}${Math.random()}`}
								dataRow={item}
								columns={columns}
								setModalState={setModalState}
								checkboxHandler={checkboxHandler}
								isChecked={isChecked}
								idModal={idModal}
								data={data}
							/>
						);
					})}
				</tbody>
			</table>
			{openPopup && (
				<PopUp
					openPopup={openPopup}
					PopUpToggle={PopUpToggle}
					checkedItemsArray={checkedItemsArray}
					deleteCellTable={deleteCellTable}
				></PopUp>
			)}
		</>
	);
}

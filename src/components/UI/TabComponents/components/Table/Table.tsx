import { useTableCheckbox } from "../../../../../hooks/useTableCheckbox";
import TableHead from "./components/TableHead";
import RowTable from "./components/RowTable";
import PopUp from "../../../../Modals/PopUp/PopUp";

import style from "./Table.module.scss";
import type { IColumns } from "../../../../../interfaces/columns";
import { useAppSelector } from "../../../../../store/hooks";

interface ITableProps {
	columns: IColumns[];
	hasCheckbox: boolean;
	idModal: string;
}

export default function Table({
	columns,
	hasCheckbox,
	idModal,
}: ITableProps): JSX.Element {
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
					{products.map((item: any, index) => {
						const isChecked = checkedItemsArray.includes(item.id);
						return (
							<RowTable
								hasCheckbox={hasCheckbox}
								key={`id-${index}${Math.random()}`}
								dataRow={item}
								columns={columns}
								checkboxHandler={checkboxHandler}
								isChecked={isChecked}
								idModal={idModal}
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

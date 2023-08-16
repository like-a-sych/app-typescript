// import { useTableCheckbox } from "../../../../hooks/useTableCheckbox";
// import { Pagination, AddItemButton, Table } from "../../../../UI/TabComponents";
// import { tableCellsArray } from "../../../../constants/cells";
// import { theadListPromocodes } from "./theadList";
// import PopUp from "../../../../UI/PopUp/PopUp";
// import style from "../TableBlock.module.scss";

// export default function Promocodes() {
// 	const {
// 		setOpenPopup,
// 		openPopup,
// 		pagination,
// 		setCellArray,
// 		cellArray,
// 		deleteCellTable,
// 		checkedItemsArray,
// 		sliceArray,
// 		setCheckedItemsArray,
// 		setPagination,
// 	} = useTableCheckbox(tableCellsArray);

// 	return (
// 		<div className={style["table-block"]}>
// 			<div className={style["table-block__header"]}>
// 				<Pagination
// 					data={tableCellsArray}
// 					setCellArray={setCellArray}
// 					setCheckedItemsArray={setCheckedItemsArray}
// 					pagination={pagination}
// 					setPagination={setPagination}
// 					sliceArray={sliceArray}
// 				/>
// 				<AddItemButton />
// 			</div>
// 			<div className={style["table-block__content"]}>
// 				<Table
// 					cellArray={cellArray}
// 					checkedItemsArray={checkedItemsArray}
// 					setCheckedItemsArray={setCheckedItemsArray}
// 					theadList={theadListPromocodes}
// 				/>
// 				{openPopup && (
// 					<PopUp
// 						openPopup={openPopup}
// 						setOpenPopup={setOpenPopup}
// 						checkedItemsArray={checkedItemsArray}
// 						deleteCellTable={deleteCellTable}
// 					></PopUp>
// 				)}
// 			</div>
// 		</div>
// 	);
// }

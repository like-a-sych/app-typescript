import { useEffect } from "react";
import { useSearch } from "../../../hooks/useSearch";
import { usePagination } from "../../../hooks/usePagination";
import { useTableCheckbox } from "../../../hooks/useTableCheckbox";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { fetchLoadProducts } from "../../../store/features/ProductSlice";

import Pagination from "../../UI/TabComponents/components/Pagination/Pagination";
import SearchInput from "../../UI/TabComponents/components/SearchInput/SearchInput";
import TableHead from "../../UI/TabComponents/components/Table/components/TableHead";
import RowTable from "../../UI/TabComponents/components/Table/components/RowTable";
import PopUp from "../../Modals/PopUp/PopUp";

import style from "../../UI/TabComponents/components/Table/components/TableContainer/TableContainer.module.scss";

import type { IColumns } from "../../../interfaces/columns";
import type { IProduct } from "../../../interfaces/mocksInterfaces";

export default function Products(): JSX.Element {
	const dispatch = useAppDispatch();
	const products = useAppSelector(state => state.products.products);
	const lastPage = useAppSelector(state => state.products.lastPage);
	const modal = useAppSelector(state => state.products.modalId);

	const columns: IColumns[] = [
		{
			name: "Название",
			selector: row => row.nameFrom1C,
		},
		{
			name: "Артикул",
			selector: row => row.codeFrom1C,
		},
	];

	const { pagination, limitRows, handleLimitChange, handleChangePage } =
		usePagination({ lastPage });

	const { setSearchValue, clearSearch, debouncedSearchTerm } = useSearch();
	const {
		allClick,
		isAllChecked,
		checkboxHandler,
		deleteCellTable,
		checkedItemsArray,
		openPopup,
		PopUpToggle,
	} = useTableCheckbox(products);

	useEffect(() => {
		dispatch(
			fetchLoadProducts({
				limitRowsOnPage: limitRows,
				paginationObj: pagination,
				searchString: debouncedSearchTerm,
			})
		);
	}, [dispatch, limitRows, pagination, debouncedSearchTerm]);

	return (
		<>
			<div className={style["table-block__header"]}>
				<SearchInput
					clearSearch={clearSearch}
					setSearchValue={setSearchValue}
				/>
				<Pagination
					lastPage={lastPage}
					pagination={pagination}
					handleLimitChange={handleLimitChange}
					handleChangePage={handleChangePage}
				/>
			</div>
			<div className={style["table-block__content"]}>
				{products.length > 0 ? (
					<>
						<table className={style["content-sales-table"]}>
							<TableHead
								allClick={allClick}
								isChecked={isAllChecked}
								theadList={columns.map(i => i.name)}
							/>
							<tbody className={style["content-sales-table__body"]}>
								{products.map((item: IProduct, index) => {
									const isChecked = checkedItemsArray.includes(item.id);
									return (
										<RowTable
											key={`id-${index}${Math.random()}`}
											dataRow={item}
											columns={columns}
											checkboxHandler={checkboxHandler}
											isChecked={isChecked}
											idModal={modal}
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
				) : (
					<div className="errorText">Здесь пока нет товаров</div>
				)}
			</div>
		</>
	);
}

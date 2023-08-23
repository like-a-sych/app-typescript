import { useEffect } from "react";
import { useSearch } from "../../../hooks/useSearch";
import { usePagination } from "../../../hooks/usePagination";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { fetchLoadUsers } from "../../../store/features/UserSlice";

import SearchInput from "../../UI/TabComponents/components/SearchInput/SearchInput";
import Pagination from "../../UI/TabComponents/components/Pagination/Pagination";
import TableHead from "../../UI/TabComponents/components/Table/components/TableHead";
import RowTable from "../../UI/TabComponents/components/Table/components/RowTable";

import style from "../../UI/TabComponents/components/Table/components/TableContainer/TableContainer.module.scss";

import type { IColumns } from "../../../interfaces/columns";

export default function Users() {
	const dispatch = useAppDispatch();
	const users = useAppSelector(state => state.users.users);
	const lastPage = useAppSelector(state => state.users.lastPage);
	//конфиг для отображения полей в таблице. В объект помещаем name для thead,а в selector функцию в которую передается массив объектов строки и возвращает value указанных ключей
	const columns: IColumns[] = [
		{
			name: "ФИ",
			selector: row => {
				return row.name + " " + row.lastName;
			},
		},
		{
			name: "Почта",
			selector: row => row.email,
		},
		{
			name: "Телефон",
			selector: row => row.phone,
		},
	];
	const { pagination, limitRows, handleLimitChange, handleChangePage } =
		usePagination({ lastPage });
	const { setSearchValue, clearSearch, debouncedSearchTerm } = useSearch();
	useEffect(() => {
		dispatch(
			fetchLoadUsers({
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
				{users.length > 0 ? (
					<table className={style["content-sales-table"]}>
						<TableHead theadList={columns.map(i => i.name)} />
						<tbody className={style["content-sales-table__body"]}>
							{users.map((item: any, index) => {
								return (
									<RowTable
										key={`id-${index}${Math.random()}`}
										dataRow={item}
										columns={columns}
									/>
								);
							})}
						</tbody>
					</table>
				) : (
					<div className={style["errorText"]}>Здесь пока нет пользователей</div>
				)}
			</div>
		</>
	);
}

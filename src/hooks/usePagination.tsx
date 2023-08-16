import { useEffect, useState } from "react";
import { visibleCells } from "../constants/visibleCells";
import type { TLoadDataFunc } from "../interfaces/iUsePagination";

export function usePagination(
	data: unknown[],
	lengthData: number,
	loadData: TLoadDataFunc
) {
	const [lastPagePagination, setLastPagePagination] = useState(0);
	const [pagination, setPagination] = useState(1);
	const [limitRows, setLimitRows] = useState(visibleCells[0]);

	const handlePaginationChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		const value = +e.target.value;
		setLimitRows(value);
		setPagination(1);
		loadData(value, 1);
	};
	const handleChangePageNext = () => {
		if (pagination < Math.ceil(lengthData / data.length)) {
			setPagination(prev => prev + 1);
			console.log(pagination);
			loadData(limitRows, pagination + 1);
		}
	};
	const handleChangePagePrev = () => {
		if (pagination > 1) {
			setPagination(prev => prev - 1);
			loadData(limitRows, pagination - 1);
		}
	};
	useEffect(() => {
		loadData(limitRows, pagination);
	}, []);

	useEffect(() => {
		if (Array.isArray(data)) {
			setLastPagePagination(
				Math.ceil(lengthData / data.length) // переменная для вычисления последней странице на основе отображаемого контента на странице
			);
		}
	}, [data]);
	return {
		pagination,
		handlePaginationChange,
		handleChangePagePrev,
		handleChangePageNext,
		lastPagePagination,
	};
}

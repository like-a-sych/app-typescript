import { useState, useEffect } from "react";

import useDebounce from "./useDebounce";
import { TSearchDataFunc } from "../interfaces/iSearch";

export function useSearch(
	setData: (value: any[]) => void,
	searchData: TSearchDataFunc
) {
	// Состояние и сеттер состояния для поискового запроса
	const [searchValue, setSearchValue] = useState("");

	const debouncedSearchTerm = useDebounce(searchValue, 500);
	//!============================================

	function searchingHandler(searchingValue: string) {
		const value = searchingValue.toLowerCase().trim();
		searchData(value);
	}

	function clearSearch() {
		if (searchValue !== "") {
			setData([]);
			searchData("");
		}
	}

	//?===================================================
	useEffect(() => {
		// Убедиться что у нас есть значение (пользователь ввел что-то)
		if (debouncedSearchTerm.length > 0) {
			return searchingHandler(debouncedSearchTerm.toLowerCase());
		} else {
			clearSearch();
		}
	}, [debouncedSearchTerm]);
	//?===================================================

	return {
		setSearchValue,
		clearSearch,
	};
}

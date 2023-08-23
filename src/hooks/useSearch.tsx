import { useState, useEffect } from "react";

import useDebounce from "./useDebounce";

export function useSearch() {
	// Состояние и сеттер состояния для поискового запроса
	const [searchValue, setSearchValue] = useState("");

	const debouncedSearchTerm = useDebounce(searchValue, 500);

	function searchingHandler(searchingValue: string) {
		const value = searchingValue.toLowerCase().trim();
		setSearchValue(value);
	}

	function clearSearch() {
		if (searchValue !== "") {
			setSearchValue("");
		}
	}

	useEffect(() => {
		// Убедиться что у нас есть значение (пользователь ввел что-то)
		if (debouncedSearchTerm.length > 0) {
			return searchingHandler(debouncedSearchTerm.toLowerCase());
		} else {
			clearSearch();
		}
	}, [debouncedSearchTerm]);

	return {
		debouncedSearchTerm,
		setSearchValue,
		clearSearch,
	};
}

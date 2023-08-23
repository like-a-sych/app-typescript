import { useRef } from "react";
import style from "./SearchInput.module.scss";

interface ISearchInputProps {
	clearSearch: () => void;
	setSearchValue: React.Dispatch<React.SetStateAction<string>>;
}

export default function SearchInput({
	clearSearch,
	setSearchValue,
}: ISearchInputProps): JSX.Element {
	const handleInput = (event: React.SyntheticEvent<HTMLInputElement>) => {
		setSearchValue((event.target as HTMLInputElement).value);
	};
	const inputRef = useRef<any>(null);

	function handleClick() {
		inputRef.current.value = "";
		clearSearch();
	}

	return (
		<div className={style["pagination__search"]}>
			<input
				onChange={handleInput}
				className={style["search"]}
				placeholder="Поиск"
				ref={inputRef}
			></input>
			<button
				title="clear search"
				type="button"
				className={style["delete"]}
				onClick={handleClick}
			></button>
		</div>
	);
}

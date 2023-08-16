import style from "./SearchInput.module.scss";

interface ISearchInputProps {
	clearSearch: () => void;
	setSearchValue: React.Dispatch<React.SetStateAction<string>>;
}

export default function SearchInput({
	clearSearch,
	setSearchValue,
}: ISearchInputProps): JSX.Element {
	return (
		<div className={style["pagination__search"]}>
			<input
				onChange={e => setSearchValue(e.target.value)}
				className={style["search"]}
				placeholder="Поиск"
			></input>
			<button
				title="clear search"
				type="button"
				className={style["delete"]}
				onClick={clearSearch}
			></button>
		</div>
	);
}

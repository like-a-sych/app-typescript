import style from "./Pagination.module.scss";

interface ISelectOptionsProps {
	value: number;
}

export default function SelectOptions({
	value,
}: ISelectOptionsProps): JSX.Element {
	return (
		<option className={style["pagination__option"]} value={value}>
			{value}
		</option>
	);
}

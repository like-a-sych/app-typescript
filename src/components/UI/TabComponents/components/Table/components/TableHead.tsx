import TheadCheckbox from "./TheadCheckbox/TheadCheckbox";

import style from "../Table.module.scss";

interface ITableHeadProps {
	isChecked: boolean;
	allClick: () => void;
	theadList: string[];
	hasCheckbox: boolean;
}

export default function TableHead({
	isChecked,
	allClick,
	theadList,
	hasCheckbox,
}: ITableHeadProps): JSX.Element {
	return (
		<thead className={style["content-sales-table__header"]}>
			<tr>
				{hasCheckbox && (
					<TheadCheckbox isChecked={isChecked} allClick={allClick} />
				)}
				{theadList.map(item => (
					<th key={item}>{item}</th>
				))}
			</tr>
		</thead>
	);
}

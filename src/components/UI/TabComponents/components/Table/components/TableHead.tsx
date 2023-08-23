import TheadCheckbox from "./TheadCheckbox/TheadCheckbox";

import style from "../Table.module.scss";

interface ITableHeadProps {
	isChecked?: boolean | undefined;
	allClick?: () => void | undefined;
	theadList: string[];
}

export default function TableHead({
	isChecked,
	allClick,
	theadList,
}: ITableHeadProps): JSX.Element {
	return (
		<thead className={style["content-sales-table__header"]}>
			<tr>
				{allClick && (
					<TheadCheckbox isChecked={isChecked} allClick={allClick} />
				)}
				{theadList.map(item => (
					<th key={item}>{item}</th>
				))}
			</tr>
		</thead>
	);
}

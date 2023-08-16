import RowCities from "../RowCities/RowCities";

import style from "./TableCities.module.scss";

export default function TableCities({ data, columns }) {
	return (
		<table className={style["table-block__wrapper"]}>
			<thead>
				<tr className={style["table-block__header"]}>
					<th>Город</th>
					<th colSpan="2">Адрес</th>
				</tr>
			</thead>
			<tbody className={style["table-block__table"]}>
				{data.map(item => (
					<RowCities key={item.id} item={item} columns={columns} />
				))}
			</tbody>
		</table>
	);
}

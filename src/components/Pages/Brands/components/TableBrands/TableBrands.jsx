import RowBrands from "../RowBrands/RowBrands";
import style from "./TableBrands.module.scss";

export default function TableBrands({ data, columns }) {
	return (
		<table className={style["table-block__wrapper"]}>
			<thead>
				<tr className={style["table-block__header"]}>
					<th>Логотип бренда</th>
					<th colSpan="2">Название бренда</th>
				</tr>
			</thead>
			<tbody className={style["table-block__table"]}>
				{data.map(item => (
					<RowBrands key={item.id} item={item} columns={columns} />
				))}
			</tbody>
		</table>
	);
}

import style from "./RowCities.module.scss";

export default function RowCities({ columns, item }) {
	const rowData = columns.map(element => element.selector(item));
	return (
		<tr className={style["table-block__item"]}>
			{rowData.map((el, index) => {
				return <td key={`${index}-${el.name}${Math.random()}`}>{el}</td>;
			})}
			<td className={style["table-block__recycle"]}>
				<button className={style["delete"]} type="button"></button>
			</td>
		</tr>
	);
}

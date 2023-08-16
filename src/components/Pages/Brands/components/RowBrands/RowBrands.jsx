import style from "./RowBrands.module.scss";

export default function RowBrands({ columns, item }) {
	const rowData = columns.map(element => element.selector(item));
	console.log(rowData);
	return (
		<tr className={style["table-block__item"]}>
			<td
				className={style["table-block__image"]}
				key={`${item.name}${Math.random()}`}
			>
				<img src={item.icon} alt="icon"></img>
			</td>
			<td
				className={style["table-block__name"]}
				key={`${item.name}${Math.random()}`}
			>
				{item.name}
			</td>
			<td className={style["table-block__buttons"]}>
				<button className={style["edit"]} type="button"></button>
				<button className={style["delete"]} type="button"></button>
			</td>
		</tr>
	);
}

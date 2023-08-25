import { ICatalog } from "../../../../../interfaces/mocksInterfaces";
import RowTable from "./RowTable";

import style from "../../Category.module.scss";

interface IInnerContentTable {
	data: ICatalog[];
	callback?: (position: number) => void;
}

export default function InnerContentTable({
	data,
	callback,
}: IInnerContentTable) {
	return (
		<div className={style["inner-data-table"]}>
			<div className={style["inner-data-table__header"]}>
				Название категории
			</div>
			<div className={style["inner-data-table__body"]}>
				{data.map(item => (
					<RowTable
						key={item.id}
						id={item.id}
						item={item}
						callback={callback}
					/>
				))}
			</div>
		</div>
	);
}

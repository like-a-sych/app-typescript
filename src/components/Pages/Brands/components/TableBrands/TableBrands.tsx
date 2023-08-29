import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../../../store/hooks";
import { IColumnBrand } from "../../Brands";
import RowBrands from "../RowBrands/RowBrands";
import style from "./TableBrands.module.scss";
import { fetchLoadBrands } from "../../../../../store/features/BrandSlice";

interface ITableBrands {
	columns: IColumnBrand[];
}

export default function TableBrands({ columns }: ITableBrands) {
	const dispatch = useAppDispatch();
	const dataBrands = useAppSelector(state => state.brand.brands);

	useEffect(() => {
		dispatch(fetchLoadBrands({}));
	}, [dispatch]);
	return (
		<table className={style["table-block__wrapper"]}>
			<thead>
				<tr className={style["table-block__header"]}>
					<th>Логотип бренда</th>
					<th colSpan={2}>Название бренда</th>
				</tr>
			</thead>
			<tbody className={style["table-block__table"]}>
				{dataBrands.map(item => (
					<RowBrands key={item.id} item={item} columns={columns} />
				))}
			</tbody>
		</table>
	);
}

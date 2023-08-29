import { brandsMockData } from "../../../constants/mocks/brandsMockData";

import FormInputFile from "./components/FormInputFile/FormInputFile";

import style from "./Brands.module.scss";
import TableBrands from "./components/TableBrands/TableBrands";

export interface IColumnBrand {
	selector: (row: any) => string;
}

export default function Brands() {
	const columns: IColumnBrand[] = [
		{
			selector: row => row.icon,
		},
		{
			selector: row => row.name,
		},
	];

	return (
		<div className={style["brands-page"]}>
			<FormInputFile />
			<div className={style["table-block"]}>
				<TableBrands columns={columns} />
			</div>
		</div>
	);
}

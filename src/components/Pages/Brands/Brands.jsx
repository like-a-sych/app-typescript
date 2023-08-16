import { brandsMockData } from "../../../constants/mocks/brandsMockData";

import FormInputFile from "./components/FormInputFile/FormInputFile";

import style from "./Brands.module.scss";
import TableBrands from "./components/TableBrands/TableBrands";

export default function Brands() {
	const columns = [
		{
			selector: row => row.icon,
		},
		{
			selector: row => row.name,
		},
	];

	return (
		<div className={style["brands-page"]}>
			<FormInputFile
				placeholder="Введите название бренда"
				buttonText="Добавить бренд"
			/>
			<div className={style["table-block"]}>
				<TableBrands data={brandsMockData} columns={columns} />
			</div>
		</div>
	);
}

import { citiesMockData } from "../../../constants/mocks/citiesMockData";
import FormInput from "./components/FormInput/FormInput";
import TableCities from "./components/TableCities/TableCities";

import style from "./Cities.module.scss";

export default function Cities() {
	const columns = [
		{
			selector: row => row.name,
		},
		{
			selector: row => row.address,
		},
	];

	return (
		<div className={style["cities-page"]}>
			<FormInput
				placeholder1="Введите название города"
				placeholder2="Введите адрес"
				buttonText="Добавить город"
			/>
			<div className={style["table-block"]}>
				<TableCities data={citiesMockData} columns={columns} />
			</div>
		</div>
	);
}

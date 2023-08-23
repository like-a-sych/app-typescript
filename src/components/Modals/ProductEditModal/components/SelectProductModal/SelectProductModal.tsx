import Form from "react-bootstrap/Form";
import style from "./SelectProductModal.module.scss";
import { IProduct } from "../../../../../interfaces/mocksInterfaces";

interface ISelectProductModal {
	dataBrands: IProduct[];
	valueCurrentItem: string;
}

export default function SelectProductModal({
	dataBrands,
	valueCurrentItem,
}: ISelectProductModal) {
	console.log(dataBrands);
	return (
		<div className={style["list-block__list-item"]}>
			<Form.Select
				className={style["list-block__select"]}
				onChange={value => console.log(value)}
			>
				{dataBrands.map((item, index) => {
					//Проверка отрисовки выбранного option, если при мапе имя бренда совпадет с текущим именем данной строки, то такой option станет selected
					if (valueCurrentItem === item.name) {
						return (
							<option
								selected
								defaultValue={item.name}
								className={style["list-block__option"]}
								key={`id-${index}${Math.random()}`}
							>
								{item.name}
							</option>
						);
					} else {
						return (
							<option
								defaultValue={item.name}
								className={style["list-block__option"]}
								key={item.id}
							>
								{item.name}
							</option>
						);
					}
				})}
			</Form.Select>
		</div>
	);
}

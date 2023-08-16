import Form from "react-bootstrap/Form";

import style from "./SelectProductModal.module.scss";

export default function SelectProductModal({ dataBrands, valueCurrentItem }) {
	return (
		<div className={style["list-block__list-item"]}>
			<Form.Select
				defaultValue="default"
				className={style["list-block__select"]}
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

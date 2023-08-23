import { useEffect, useState } from "react";
import { catalogMockData } from "../../../constants/mocks/catalogMockData";
import { subCatalogMockData } from "../../../constants/mocks/subCatalogMockData";

import ButtonBlock from "./components/ButtonBlock/ButtonBlock";
import InnerContentTable from "./components/InnerContentTable/InnerContentTable";

import "./Category.scss";

export default function Category() {
	const [position, setPosition] = useState(null);
	const [subData, setSubData] = useState([]);

	function selectCategory(position) {
		setPosition(position);
	}

	useEffect(() => {
		setSubData(subCatalogMockData.filter(item => item.position === position));
	}, [position]);

	return (
		<div className="category">
			<div className="category__container">
				<div className="category__table table">
					<ButtonBlock
						text={"Добавить категорию"}
						placeholder={"Введите название категории"}
					/>
					<InnerContentTable data={catalogMockData} callback={selectCategory} />
				</div>
				{subData.length > 0 ? (
					<div className="category__table table">
						<ButtonBlock
							text={"Добавить подкатегорию"}
							placeholder={"Введите название подкатегории"}
						/>
						<InnerContentTable data={subData} />
					</div>
				) : (
					<div className="errorCenter">Выберите категорию</div>
				)}
			</div>
		</div>
	);
}

import { useEffect, useState } from "react";
import { catalogMockData } from "../../../constants/mocks/catalogMockData";
import { subCatalogMockData } from "../../../constants/mocks/subCatalogMockData";
import { useAppSelector } from "../../../store/hooks";

import ButtonBlock from "./components/ButtonBlock/ButtonBlock";
import InnerContentTable from "./components/InnerContentTable/InnerContentTable";

import style from "./Category.module.scss";

export default function Category() {
	const catalogs = useAppSelector(state => state.catalogs.catalogs);

	const [position, setPosition] = useState<number | null>(null);
	const [subData, setSubData] = useState(catalogs.subCatalog);

	function selectCategory(position: number) {
		setPosition(position);
	}

	useEffect(() => {
		setSubData(subCatalogMockData.filter(item => item.position === position));
	}, [position]);

	return (
		<div className={style["category"]}>
			<div className={style["category__container"]}>
				<div className={style["category__table table"]}>
					<ButtonBlock
						text={"Добавить категорию"}
						placeholder={"Введите название категории"}
					/>
					<InnerContentTable data={catalogMockData} callback={selectCategory} />
				</div>
				{subData.length > 0 ? (
					<div className={style["category__table table"]}>
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

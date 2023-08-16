import { useContext, useState } from "react";
import { MainContext } from "../../../context";
import ProductService from "../../../services/productService";
import { useSearch } from "../../../hooks/useSearch";
import { useTableCheckbox } from "../../../hooks/useTableCheckbox";
import { usePagination } from "../../../hooks/usePagination";

import Pagination from "../../UI/TabComponents/components/Pagination/Pagination";
import Table from "../../UI/TabComponents/components/Table/Table";
import SearchInput from "../../UI/TabComponents/components/SearchInput/SearchInput";

import style from "../../UI/TabComponents/components/Table/components/TableContainer/TableContainer.module.scss";

import type { IColumns } from "../../../interfaces/columns";
import type { IProductsData } from "../../../interfaces/mocksInterfaces";
import type { TLoadDataFunc } from "../../../interfaces/iUsePagination";
import type { TSearchDataFunc } from "../../../interfaces/iSearch";

type TLoadData = { data: IProductsData[]; dataLength: number };

export default function Products(): JSX.Element {
	const { setModalState } = useContext(MainContext);

	const columns: IColumns[] = [
		{
			name: "Название",
			selector: row => row.nameFrom1C,
		},
		{
			name: "Артикул",
			selector: row => row.codeFrom1C,
		},
	];

	const [products, setProducts] = useState<IProductsData[]>([]);

	//моковая длина массива для вычисления lastPagePagination
	const [lengthData, setLengthData] = useState(0);

	const loadProducts: TLoadDataFunc = async (
		limitRowsOnPage,
		paginationObj
	) => {
		const data: TLoadData = await ProductService.getProduct(
			limitRowsOnPage,
			paginationObj
		);
		setProducts(data.data);
		setLengthData(data.dataLength);
	};
	const searchProducts: TSearchDataFunc = async value => {
		const data = await ProductService.searchProduct(value);
		setProducts(data);
	};

	const paginationSetting = usePagination(products, lengthData, loadProducts);
	const checkboxSetting = useTableCheckbox(products);
	const { setSearchValue, clearSearch } = useSearch(
		setProducts,
		searchProducts
	);

	if (products.length > 0) {
		return (
			<>
				<div className={style["table-block__header"]}>
					<SearchInput
						clearSearch={clearSearch}
						setSearchValue={setSearchValue}
					/>
					<Pagination paginationSetting={paginationSetting} />
				</div>
				<div className={style["table-block__content"]}>
					<Table
						columns={columns}
						data={products}
						hasCheckbox={true}
						idModal="purchaseEdit"
						checkboxSetting={checkboxSetting}
						setModalState={setModalState}
					/>
				</div>
			</>
		);
	} else {
		return <div className="errorText">Здесь пока нет товаров</div>;
	}
}

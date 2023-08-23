import { productsMockData } from "../constants/mocks/productsMockData";

const lengthData = productsMockData.length;

class ProductService {
	static instance;
	static getInstance() {
		if (!ProductService.instance) {
			ProductService.instance = new ProductService();
		}
		return ProductService.instance;
	}

	async getProduct(limitView = 10, paginationObj = 1, searchString) {
		console.info("[ProductService:getProduct]", {
			limitView,
			paginationObj,
			searchString,
		});

		function getLastPage(length) {
			return Math.ceil(length / limitView);
		}

		if (searchString) {
			const filteredData = productsMockData.filter(item => {
				if (item.nameFrom1C.includes(searchString)) {
					return item;
				}
			});
			return {
				data: filteredData,
				lengthData: filteredData.length,
				lastPage: getLastPage(filteredData.length),
			};
		}
		const data = productsMockData.splice(paginationObj, limitView);
		return { data, lengthData, lastPage: getLastPage(lengthData) };
	}
}
export default ProductService.getInstance();

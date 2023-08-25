import { catalogMockData } from "../constants/mocks/catalogMockData";
import { subCatalogMockData } from "../constants/mocks/subCatalogMockData";

class CategoryService {
	static instance;
	static getInstance() {
		if (!CategoryService.instance) {
			CategoryService.instance = new CategoryService();
		}
		return CategoryService.instance;
	}

	async getCatalog() {
		console.info("[CategoryService:getCatalog]", "LoadCatalog");

		const data = { catalog: catalogMockData, subCatalog: subCatalogMockData };
		return { data };
	}
}
export default CategoryService.getInstance();

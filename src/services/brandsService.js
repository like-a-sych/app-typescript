import { brandsMockData } from "../constants/mocks/brandsMockData";

class BrandsService {
	static instance;
	static getInstance() {
		if (!BrandsService.instance) {
			BrandsService.instance = new BrandsService();
		}
		return BrandsService.instance;
	}

	async getBrands() {
		console.info("[BrandsService:getBrands]", {});
		const data = brandsMockData;
		return { data };
	}
}
export default BrandsService.getInstance();

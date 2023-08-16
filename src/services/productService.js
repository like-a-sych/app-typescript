import { productsMockData } from "../constants/mocks/productsMockData";

class ProductService {
  static instance;
  static getInstance() {
    if (!ProductService.instance) {
      ProductService.instance = new ProductService();
    }
    return ProductService.instance;
  }

  async getProduct(limitView = 10, paginationObj = 1) {
    console.info("[ProductService:getProduct]", { limitView, paginationObj });
    const dataLength = 490;
    const data = productsMockData.splice(paginationObj, limitView);
    return { data, dataLength };
  }

  async searchProduct(string) {
    console.info("[ProductService:searchProduct]", { string });
    return productsMockData;
  }

  /// .... остальной функционал необходимый для работы с сущностью пользователь
}
export default ProductService.getInstance();

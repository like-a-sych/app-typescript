import { usersMockData } from "../constants/mocks/usersMockData";

class UserService {
	static instance;
	static getInstance() {
		if (!UserService.instance) {
			UserService.instance = new UserService();
		}
		return UserService.instance;
	}

	async getUsers(limitView, paginationObj) {
		console.info("[UserService:getUsers]", { limitView, paginationObj });
		const dataLength = 1000;
		const data = usersMockData.splice(paginationObj, limitView);
		return { data, dataLength };
	}

	async searchUsers(string) {
		console.info("[ProductService:searchProduct]", { string });
		return usersMockData;
	}

	/// .... остальной функционал необходимый для работы с сущностью пользователь
}
export default UserService.getInstance();

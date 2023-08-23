import { usersMockData } from "../constants/mocks/usersMockData";

const lengthData = usersMockData.length;
class UserService {
	static instance;
	static getInstance() {
		if (!UserService.instance) {
			UserService.instance = new UserService();
		}
		return UserService.instance;
	}

	async getUsers(limitView = 10, pagination = 1, searchString) {
		console.info("[UserService:getUsers]", {
			limitView,
			pagination,
			searchString,
		});
		function getLastPage(length) {
			return Math.ceil(length / limitView);
		}
		if (searchString) {
			const filteredData = usersMockData;
			return {
				data: filteredData,
				lengthData: filteredData.length,
				lastPage: getLastPage(filteredData.length),
			};
		}
		const data = usersMockData.splice(pagination, limitView);
		return { data, lengthData, lastPage: getLastPage(lengthData) };
	}

	/// .... остальной функционал необходимый для работы с сущностью пользователь
}
export default UserService.getInstance();

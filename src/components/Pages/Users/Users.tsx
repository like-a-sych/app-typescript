import { useState } from "react";
import { useSearch } from "../../../hooks/useSearch";
import { usePagination } from "../../../hooks/usePagination";
import UserService from "../../../services/userService";

import SearchInput from "../../UI/TabComponents/components/SearchInput/SearchInput";
import Pagination from "../../UI/TabComponents/components/Pagination/Pagination";
import Table from "../../UI/TabComponents/components/Table/Table";

import style from "./Users.module.scss";

import type { TLoadDataFunc } from "../../../interfaces/iUsePagination";
import type { IUsers } from "../../../interfaces/mocksInterfaces";
import type { IColumns } from "../../../interfaces/columns";
import type { TSearchDataFunc } from "../../../interfaces/iSearch";

type TLoadData = { data: IUsers[]; dataLength: number };

export default function Users() {
	const [users, setUsers] = useState<IUsers[]>([]);
	const [lengthData, setLengthData] = useState(0);

	const loadUsers: TLoadDataFunc = async (limitView, paginationObj) => {
		const data: TLoadData = await UserService.getUsers(
			limitView,
			paginationObj
		);
		setUsers(data.data);
		setLengthData(data.dataLength);
	};
	const searchUsers: TSearchDataFunc = async value => {
		const data = await UserService.searchUsers(value);
		setUsers(data);
	};

	const paginationSetting = usePagination(users, lengthData, loadUsers);
	const { setSearchValue, clearSearch } = useSearch(setUsers, searchUsers);
	//конфиг для отображения полей в таблице. В объект помещаем name для thead,а в selector функцию в которую передается массив объектов строки и возвращает value указанных ключей
	const columns: IColumns[] = [
		{
			name: "ФИ",
			selector: row => {
				return row.name + " " + row.lastName;
			},
		},
		{
			name: "Почта",
			selector: row => row.email,
		},
		{
			name: "Телефон",
			selector: row => row.phone,
		},
	];

	if (users.length > 0) {
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
						hasCheckbox={false}
						columns={columns}
						idModal={""}
						data={users}
					/>
				</div>
			</>
		);
	} else {
		return (
			<div className={style["errorText"]}>Здесь пока нет пользователей</div>
		);
	}
}

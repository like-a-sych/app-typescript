import { useEffect, useState } from "react";
import { visibleCells } from "../../../constants/visibleCells";
import { useSearch } from "../../../hooks/useSearch";
import { usePopup } from "../../../hooks/usePopup";
import UserService from "../../../services/userService";
import SearchInput from "../../UI/TabComponents/components/SearchInput/SearchInput";
import Pagination from "../../UI/TabComponents/components/Pagination/Pagination";
import Table from "../../UI/TabComponents/components/Table/Table";
import PopUp from "../../Modals/PopUp/PopUp";

import style from "./Users.module.scss";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [lengthData, setLengthData] = useState(0);
  const [lastPage, setLastPage] = useState(0);
  const [pagination, setPagination] = useState(1);
  const [limitRows, setLimitRows] = useState(visibleCells[0]);

  const loadUsers = async (limitView, paginationObj) => {
    const data = await UserService.getUsers(limitView, paginationObj);
    setUsers(data.data);
    setLengthData(data.dataLength);
  };

  // const { deleteCellTable } = useSearch(users);
  // const { openPopup, PopUpToggle } = usePopup({ checkedItemsArray });

  const handleChangePageNext = () => {
    // if (pagination < Math.floor(lengthData / users.length)) {
    setPagination((prev) => prev + 1);
    console.log(pagination);
    loadUsers(limitRows, pagination + 1);
    // }
  };
  const handleChangePagePrev = (value) => {
    if (pagination > 1) {
      setPagination((prev) => prev - 1);
      loadUsers(limitRows, pagination - 1);
    }
  };
  // const handleDeleteRows = (e) => {
  //   const { value } = e.target;
  //   loadUsers(value);
  // };
  const handlePaginationChange = (e) => {
    const value = e.target.value;
    setLimitRows(value);
    setPagination(1);
    loadUsers(value, 1);
  };

  //конфиг для отображения полей в таблице. В объект помещаем name для thead,а в selector функцию в которую передается массив объектов строки и возвращает value указанных ключей
  const columns = [
    {
      name: "ФИ",
      selector: (row) => {
        return row.name + " " + row.lastName;
      },
    },
    {
      name: "Почта",
      selector: (row) => row.email,
    },
    {
      name: "Телефон",
      selector: (row) => row.phone,
    },
  ];
  useEffect(() => {
    loadUsers(limitRows, pagination);
  }, []);

  useEffect(() => {
    if (Array.isArray(users)) {
      setLastPage(
        Math.ceil(lengthData / users.length), // переменная для вычисления последней странице на основе отображаемого контента на странице
      );
    }
  }, [users]);

  if (users.length > 0) {
    return (
      <>
        <div className={style["table-block__header"]}>
          {/*<SearchInput*/}
          {/*  deferredText={searchValue}*/}
          {/*  setSearchValue={setSearchValue}*/}
          {/*  clearSearch={clearSearch}*/}
          {/*/>*/}
          <Pagination
            pagination={pagination}
            handleChangePageNext={handleChangePageNext}
            handleChangePagePrev={handleChangePagePrev}
            lastPage={lastPage}
            handlePaginationChange={handlePaginationChange}
          />
        </div>
        <div className={style["table-block__content"]}>
          <Table
            // handleDeleteRows={handleDeleteRows}
            // checkedItemsArray={checkedItemsArray}
            // setCheckedItemsArray={setCheckedItemsArray}
            columns={columns}
            data={users}
          />
          {/*{openPopup && (*/}
          {/*  <PopUp*/}
          {/*    openPopup={openPopup}*/}
          {/*    PopUpToggle={PopUpToggle}*/}
          {/*    checkedItemsArray={checkedItemsArray}*/}
          {/*    deleteCellTable={deleteCellTable}*/}
          {/*  ></PopUp>*/}
          {/*)}*/}
        </div>
      </>
    );
  } else {
    return (
      <div className={style["errorText"]}>Здесь пока нет пользователей</div>
    );
  }
}

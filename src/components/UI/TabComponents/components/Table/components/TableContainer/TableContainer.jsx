import { useEffect, useState } from "react";
import { useSearch } from "../../../../../../../hooks/useSearch";
import { usePopup } from "../../../../../../../hooks/usePopup";
import PopUp from "../../../../../../Modals/PopUp/PopUp";
import Pagination from "../../../Pagination/Pagination";
import Table from "../../Table";

import style from "./TableContainer.module.scss";
import SearchInput from "../../../SearchInput/SearchInput";

export default function TableContainer({
  data,
  hasPagination,
  hasCheckbox,
  columns,
  idModal,
}) {
  // const {
  //   setCountHandler,
  //   lastPage,
  //   prevPageHandler,
  //   nextPageHandler,
  //   pagination,
  //   cellArray,
  //   checkedItemsArray,
  //   setCheckedItemsArray,
  //   deleteCellTable,
  //   searchValue,
  //   setSearchValue,
  //   clearSearch,
  // } = useSearch({
  //   data,
  // });
  // const { openPopup, PopUpToggle } = usePopup({ checkedItemsArray });

  return null;
  // <>
  //   {hasPagination && (
  //     <div className={style["table-block__header"]}>
  //       <SearchInput
  //         deferredText={searchValue}
  //         setSearchValue={setSearchValue}
  //         clearSearch={clearSearch}
  //       />
  //       <Pagination
  //         pagination={pagination}
  //         setCountHandler={setCountHandler}
  //         lastPage={lastPage}
  //         prevPageHandler={prevPageHandler}
  //         nextPageHandler={nextPageHandler}
  //         data={cellArray}
  //       />
  //     </div>
  //   )}
  //   <div className={style["table-block__content"]}>
  //     <Table
  //       hasCheckbox={hasCheckbox}
  //       cellArray={cellArray}
  //       checkedItemsArray={checkedItemsArray}
  //       setCheckedItemsArray={setCheckedItemsArray}
  //       columns={columns}
  //       idModal={idModal}
  //       data={data}
  //     />
  //     {openPopup && (
  //       <PopUp
  //         openPopup={openPopup}
  //         PopUpToggle={PopUpToggle}
  //         checkedItemsArray={checkedItemsArray}
  //         deleteCellTable={deleteCellTable}
  //       ></PopUp>
  //     )}
  //   </div>
  // </>
}

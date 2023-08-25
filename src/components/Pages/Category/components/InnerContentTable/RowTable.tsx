import { useRef, useState } from "react";
import {
	ICatalog,
	ISubCatalog,
} from "../../../../../interfaces/mocksInterfaces";
import { useAppDispatch, useAppSelector } from "../../../../../store/hooks";

import style from "../../Category.module.scss";

interface IRowTable {
	item: ICatalog | ISubCatalog;
	callback?: (position: number) => void;
	id: string;
}

export default function RowTable({ item, callback, id }: IRowTable) {
	function onClickHandler() {
		callback && callback(item.position);
	}

	const onClickProps = {
		onClick: callback ? onClickHandler : undefined,
	};
	const dispatch = useAppDispatch();
	const inputRef = useRef<any>(null);
	const [disable, setDisable] = useState(true);

	function editHandler(event: any) {
		console.log("asd");
		event.stopPropagation();
		inputRef.current.focus();
		setDisable(false);
	}
	function saveInput() {
		setDisable(true);
	}

	return (
		<div className={style["inner-data-table__item"]} {...onClickProps}>
			<label className={style["inner-data-table__label"]} htmlFor={id}>
				<input
					title={item.name}
					id={id}
					type="text"
					disabled={disable}
					defaultValue={item.name}
					className={style["inner-data-table__name"]}
					ref={inputRef}
					onBlur={saveInput}
				></input>
			</label>
			<div className={style["inner-data-table__buttons"]}>
				<div className={style["inner-data-table__btn"]}>
					<button
						onClick={editHandler}
						title="edit"
						className="edit"
						data-id={id}
					/>
				</div>
				<div className={style["inner-data-table__btn"]}>
					<button
						onClick={editHandler}
						title="delete"
						className="delete"
						data-id={id}
					/>
				</div>
			</div>
		</div>
	);
}

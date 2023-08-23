import { visibleCells } from "../../../../../constants/visibleCells";

import SelectOptions from "./SelectOptions";

import style from "./Pagination.module.scss";

interface IPaginationProps {
	pagination: number;
	handleLimitChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
	lastPage: number;
	handleChangePage: any;
}

export default function Pagination({
	pagination,
	handleChangePage,
	lastPage,
	handleLimitChange,
}: IPaginationProps): JSX.Element {
	return (
		<div className={style["pagination"]}>
			<div className={style["pagination__wrapper"]}>
				<div className={style["pagination__showing"]}>
					<p>Показывать</p>
					<select
						title="pagination counter"
						className={style["pagination__show"]}
						onChange={handleLimitChange}
					>
						{visibleCells.map(item => (
							<SelectOptions key={item} value={item} />
						))}
					</select>
				</div>

				<div className={style["pagination__pages"]}>
					<p>Страница</p>
					<div className={style["pagination__page"]}>
						<span className={style["pagination__page_active"]}>
							{pagination}
						</span>
						из
						<span className={style["pagination__page_all"]}>{lastPage}</span>
					</div>
				</div>
				<div className={style["pagination__arrows"]}>
					<div
						className={style["pagination__prev"]}
						onClick={handleChangePage}
						data-page="-"
					></div>
					<div
						className={style["pagination__next"]}
						onClick={handleChangePage}
						data-page="+"
					></div>
				</div>
			</div>
		</div>
	);
}

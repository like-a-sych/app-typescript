import { visibleCells } from "../../../../../constants/visibleCells";

import SelectOptions from "./SelectOptions";

import style from "./Pagination.module.scss";

interface IPaginationProps {
	paginationSetting: {
		pagination: number;
		handlePaginationChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
		handleChangePagePrev: () => void;
		handleChangePageNext: () => void;
		lastPagePagination: number;
	};
}

export default function Pagination({
	paginationSetting: {
		pagination,
		handleChangePageNext,
		handleChangePagePrev,
		lastPagePagination,
		handlePaginationChange,
	},
}: IPaginationProps): JSX.Element {
	return (
		<div className={style["pagination"]}>
			<div className={style["pagination__wrapper"]}>
				<div className={style["pagination__showing"]}>
					<p>Показывать</p>
					<select
						title="pagination counter"
						className={style["pagination__show"]}
						onChange={handlePaginationChange}
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
						<span className={style["pagination__page_all"]}>
							{lastPagePagination}
						</span>
					</div>
				</div>
				<div className={style["pagination__arrows"]}>
					<div
						className={style["pagination__prev"]}
						onClick={handleChangePagePrev}
					></div>
					<div
						className={style["pagination__next"]}
						onClick={handleChangePageNext}
					></div>
				</div>
			</div>
		</div>
	);
}

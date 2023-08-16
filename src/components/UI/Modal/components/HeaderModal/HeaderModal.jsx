import style from "./HeaderModal.module.scss";

export default function HeaderModal({ children }) {
	return (
		<div className={style.sales__header}>
			<div className={style["header-button"]}>{children}</div>
		</div>
	);
}

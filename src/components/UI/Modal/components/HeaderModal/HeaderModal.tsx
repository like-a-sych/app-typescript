import style from "./HeaderModal.module.scss";
interface IHeaderModal {
	children: JSX.Element | JSX.Element[];
}
export default function HeaderModal({ children }: IHeaderModal) {
	return (
		<div className={style.sales__header}>
			<div className={style["header-button"]}>{children}</div>
		</div>
	);
}

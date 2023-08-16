import style from "./InputBlock.module.scss";

export default function InputList({ children }) {
	return (
		<div className={style["input-list"]}>
			<div className={style["list-block"]}>{children}</div>
		</div>
	);
}

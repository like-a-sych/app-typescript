import style from "./InputBlock.module.scss";

interface IInputList {
	children: JSX.Element | JSX.Element[];
}

export default function InputList({ children }: IInputList) {
	return (
		<div className={style["input-list"]}>
			<div className={style["list-block"]}>{children}</div>
		</div>
	);
}

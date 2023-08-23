import AddButton from "../AddButton/AddButton";
import HelpSpan from "../HelpSpan/HelpSpan";

import style from "./InputContainer.module.scss";

interface IInputContainer {
	children: JSX.Element | JSX.Element[];
	textButton: string;
	title: string;
	helpText?: string;
}

export default function InputContainer({
	children,
	textButton,
	title,
	helpText,
}: IInputContainer): JSX.Element {
	return (
		<>
			<div className={style["title"]}>{title}</div>
			<div className={style["input-container"]}>
				<div className={style["input-container__block"]}>{children}</div>
			</div>
			{helpText && (
				<HelpSpan>
					<>{helpText}</>
				</HelpSpan>
			)}
			<AddButton text={textButton}></AddButton>
		</>
	);
}

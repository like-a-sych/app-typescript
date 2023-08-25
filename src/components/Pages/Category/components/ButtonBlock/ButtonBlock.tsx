import { AddItemButton } from "../../../../UI/TabComponents";

import style from "../../Category.module.scss";

interface IButtonBlock {
	text: string;
	placeholder: string;
}

export default function ButtonBlock({ text, placeholder }: IButtonBlock) {
	return (
		<div className={style["button-block"]}>
			<div className={style["button-block__input"]}>
				<input
					type="text"
					className={"input"}
					placeholder={placeholder}
				></input>
			</div>
			<div className={style["button-block__btn"]}>
				<AddItemButton text={text} />
			</div>
		</div>
	);
}

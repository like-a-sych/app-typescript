import { AddItemButton } from "../../../../UI/TabComponents";

export default function ButtonBlock({ text, placeholder }) {
	return (
		<div className="button-block">
			<div className="button-block__input">
				<input type="text" className="input" placeholder={placeholder}></input>
			</div>
			<div className="button-block__btn">
				<AddItemButton text={text} />
			</div>
		</div>
	);
}

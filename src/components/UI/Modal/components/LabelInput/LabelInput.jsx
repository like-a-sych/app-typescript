import style from "./LabelInput.module.scss";

export default function LabelInput({
	id,
	type,
	value,
	label,
	disable,
	placeholder,
	dropdown,
}) {
	let labelClass = style.label;

	if (dropdown) {
		labelClass = style["label-before"];
	}
	return (
		<div className={style["list-block__list-item"]}>
			<label htmlFor={id} className={labelClass}>
				{label}

				<input
					disabled={disable}
					id={id}
					className={style.input}
					type={type}
					defaultValue={value}
					placeholder={placeholder}
					// onChange={() => {}} // TODO: fix mock callback
				></input>
			</label>
		</div>
	);
}

import { useState } from "react";
import style from "./Input.module.scss";

export default function Input({
	id,
	fieldType,
	hasLabel,
	labelText,
	placeholder,
}) {
	const [inputType, setInputType] = useState(fieldType);

	function showPassword() {
		if (inputType === "password") {
			setInputType("text");
		} else {
			setInputType("password");
		}
	}
	return (
		<div className={style["mainForm__form-item"]}>
			{hasLabel && (
				<label htmlFor={id} className={style.mainForm__label}>
					{labelText}
				</label>
			)}
			<input
				id={id}
				className={style.mainForm__input}
				type={inputType}
				placeholder={placeholder}
				aria-label="input field"
			/>
			{fieldType === "password" && (
				<button
					type="button"
					onClick={showPassword}
					className={style.mainForm__show}
				></button>
			)}
		</div>
	);
}

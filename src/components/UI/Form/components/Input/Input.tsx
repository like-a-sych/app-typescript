import { useState } from "react";
import style from "./Input.module.scss";
import { FormikErrors } from "formik";

interface IInput {
	id: string;
	fieldType: string;
	hasLabel: boolean;
	labelText: string;
	name: string;
	placeholder: string;
	onChange: () => void;
	helperText?: string | string[];
	error?: boolean;
}

export default function Input({
	id,
	fieldType,
	hasLabel,
	labelText,
	name,
	onChange,
	placeholder,
	helperText,
}: IInput) {
	const [inputType, setInputType] = useState(fieldType);

	function showPassword() {
		if (inputType === "password") {
			setInputType("text");
		} else {
			setInputType("password");
		}
	}
	return (
		<>
			<div className={style["mainForm__form-item"]}>
				{hasLabel && (
					<label htmlFor={id} className={style.mainForm__label}>
						{labelText}
					</label>
				)}
				<input
					id={id}
					name={name}
					className="input"
					onChange={onChange}
					type={inputType}
					placeholder={placeholder}
					aria-label="input field"
				/>

				{fieldType === "password" && (
					<button
						title="show password"
						type="button"
						onClick={showPassword}
						className={style.mainForm__show}
					></button>
				)}
			</div>
			<div className="error">{helperText}</div>
		</>
	);
}

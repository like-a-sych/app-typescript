import style from "./FormInput.module.scss";

export default function FormInput({ placeholder1, placeholder2, buttonText }) {
	return (
		<form className={style["input-block"]}>
			<input
				type="text"
				className={style["input-block__input"]}
				placeholder={placeholder1}
			/>
			<input
				type="text"
				className={style["input-block__input"]}
				placeholder={placeholder2}
			/>
			<button className={style["input-block__button"]} type="button">
				{buttonText}
			</button>
		</form>
	);
}

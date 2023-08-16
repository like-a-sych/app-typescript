import style from "./FormInputFile.module.scss";

export default function FormInputFile({ placeholder, buttonText }) {
	return (
		<form className={style["input-block"]}>
			<div className={style["input-block__item"]}>
				<input
					type="text"
					className={style["input-block__input"]}
					placeholder={placeholder}
				/>
			</div>
			<div className={style["input-block__item"]}>
				<input
					type="text"
					className={style["input-block__input"]}
					placeholder="Загрузите логотип бренда"
				/>
				<label className={style["input-block__label"]}>
					<input type="file" className={style["input-block__input"]} />
				</label>
				<span>Размер логотипа 500x500 px PNG, JPG, JPEG</span>
			</div>
			<button className={style["input-block__button"]} type="button">
				{buttonText}
			</button>
		</form>
	);
}

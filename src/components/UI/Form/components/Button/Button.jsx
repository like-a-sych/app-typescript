import style from "./Button.module.scss";

export default function Button({ typeButton, nameButton }) {
	return (
		<button
			type={typeButton}
			aria-label={typeButton}
			className={style.mainForm__submit}
		>
			{nameButton}
		</button>
	);
}

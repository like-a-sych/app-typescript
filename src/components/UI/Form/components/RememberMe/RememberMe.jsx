import style from "./RememberMe.module.scss";

export default function RememberMe({ remember, setRemember }) {
	const change = () => {
		setRemember(!remember);
	};
	return (
		<div className={style.formCheck}>
			<input
				onChange={change}
				checked={remember}
				type="checkbox"
				className={style.formCheck__input}
				id="rememberMe"
			></input>
			<label className={style.formCheck__label} htmlFor="rememberMe">
				Запомнить меня
			</label>
		</div>
	);
}

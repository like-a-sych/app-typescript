import { useAppDispatch } from "../../../../../store/hooks";
import { setRemember } from "../../../../../store/features/AuthSlice";
import style from "./RememberMe.module.scss";

interface IRememberMe {
	remember: boolean;
}

export default function RememberMe({ remember }: IRememberMe) {
	const dispatch = useAppDispatch();

	const change = () => {
		dispatch(setRemember(!remember));
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

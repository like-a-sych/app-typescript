import { Outlet } from "react-router-dom";
import style from "./FormLayout.module.scss";

export default function FormLayout() {
	return (
		<div className={style.mainForm}>
			<div className={style.mainForm__container}>
				<Outlet />
			</div>
		</div>
	);
}

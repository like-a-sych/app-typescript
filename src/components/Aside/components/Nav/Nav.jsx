import { NavLink } from "react-router-dom";
import style from "./Nav.module.scss";

function Nav(props) {
	return (
		<li className={style["aside__link-item"]}>
			<NavLink
				className={
					({ isActive }) =>
						isActive ? `${style.tab} ${style.active}` : style.tab //добавляем класс active(фича router Navlink)
				}
				to={props.href}
			>
				<div className={style.aside__pic}>{props.picture}</div>
				<p className={style["name"]}>{props.name}</p>
			</NavLink>
		</li>
	);
}

export default Nav;

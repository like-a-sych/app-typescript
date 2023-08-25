import { NavLink } from "react-router-dom";
import style from "./Nav.module.scss";

interface INav {
	href: string;
	picture: JSX.Element;
	name: string;
}

function Nav({ href, picture, name }: INav) {
	return (
		<li className={style["aside__link-item"]}>
			<NavLink
				className={
					({ isActive }) =>
						isActive ? `${style.tab} ${style.active}` : style.tab //добавляем класс active(фича router Navlink)
				}
				to={href}
			>
				<div className={style.aside__pic}>{picture}</div>
				<p className={style["name"]}>{name}</p>
			</NavLink>
		</li>
	);
}

export default Nav;

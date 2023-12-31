import { Outlet } from "react-router-dom";
import Aside from "./Aside/Aside";
import AdminButton from "./MainContent/components/AdminButton";

import style from "./Layout.module.scss";
import { useAppDispatch } from "../store/hooks";
import { logOut } from "../store/features/AuthSlice";

function Layout(): JSX.Element {
	const dispatch = useAppDispatch();
	function handleLogout() {
		dispatch(logOut());
	}
	return (
		<div className={style.wrapper}>
			<div className={style.container}>
				<header className={style.header}>
					<button onClick={handleLogout} className={style.header__logout}>
						выйти
					</button>
					<AdminButton />
				</header>
				<div className={style.cursor}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 320 300"
						height="42"
						width="42"
					>
						<rect
							className={style["tooltip-horizontal-scroll-icon_card"]}
							x="480"
							width="200"
							height="200"
							rx="5"
							fill="rgba(190,190,190,0.3)"
						></rect>
						<rect
							className={style["tooltip-horizontal-scroll-icon_card"]}
							y="0"
							width="200"
							height="200"
							rx="5"
							fill="rgba(190,190,190,0.3)"
						></rect>
						<rect
							className={style["tooltip-horizontal-scroll-icon_card"]}
							x="240"
							width="200"
							height="200"
							rx="5"
							fill="rgba(190,190,190,0.3)"
						></rect>
						<path
							className={style["tooltip-horizontal-scroll-icon_hand"]}
							d="M78.9579 285.7C78.9579 285.7 37.8579 212.5 20.5579 180.8C-2.44209 138.6 -6.2422 120.8 9.6579 112C19.5579 106.5 33.2579 108.8 41.6579 123.4L61.2579 154.6V32.3C61.2579 32.3 60.0579 0 83.0579 0C107.558 0 105.458 32.3 105.458 32.3V91.7C105.458 91.7 118.358 82.4 133.458 86.6C141.158 88.7 150.158 92.4 154.958 104.6C154.958 104.6 185.658 89.7 200.958 121.4C200.958 121.4 236.358 114.4 236.358 151.1C236.358 187.8 192.158 285.7 192.158 285.7H78.9579Z"
							fill="rgba(190,190,190,1)"
						></path>
					</svg>
				</div>
				<div className={style.main}>
					<Aside />
					<main className={style.mainInner}>
						<div className={style.mainInner__body}>
							<div className={style.mainInner__content}>
								<Outlet />
							</div>
						</div>
					</main>
				</div>
			</div>
		</div>
	);
}

export default Layout;

import { Navigate, Outlet, useLocation } from "react-router-dom";
import { pathNames } from "../constants/path";

interface IProtectedRoutes {
	isAuth: boolean;
}

export default function ProtectedRoutes({
	isAuth,
}: IProtectedRoutes): JSX.Element {
	const location = useLocation();

	if (!isAuth) {
		return <Navigate to={pathNames.login} state={{ from: location }} />;
	}
	return <Outlet />;
}

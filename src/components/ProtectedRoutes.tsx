import { Navigate, Outlet, useLocation } from "react-router-dom";
import { pathNames } from "../constants/path";

interface IProtectedRoutes {
	isAuth: string | null;
}

export default function ProtectedRoutes({
	isAuth,
}: IProtectedRoutes): JSX.Element {
	console.log(isAuth);
	const location = useLocation();

	if (isAuth === null) {
		return <Navigate to={pathNames.login} state={{ from: location }} />;
	}

	return <Outlet />;
}

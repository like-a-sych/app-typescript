import { Navigate, Outlet, useLocation } from "react-router-dom";
import { pathNames } from "../constants/path";

export default function ProtectedRoutes({ isAuth }) {
	const location = useLocation();

	if (!isAuth) {
		return <Navigate to={pathNames.login} state={{ from: location }} />;
	}
	return <Outlet />;
}

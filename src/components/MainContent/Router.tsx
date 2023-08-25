import { Route, Routes } from "react-router-dom";
import { pathNames } from "../../constants/path";
import { useAuth } from "../../hooks/useAuth";
import ProtectedRoutes from "../ProtectedRoutes";
import FormLayout from "../Public/FormLayout";
import Login from "../Public/Login";
import Register from "../Public/Register";
import Layout from "../Layout";
import Products from "../Pages/Products/Products";
import Users from "../Pages/Users/Users";
// import Cities from "../Pages/Cities/Cities";
import Category from "../Pages/Category/Category";
import { IAuthData } from "../../interfaces/authData";
// import Brands from "../Pages/Brands/Brands";

// import Protocols from "./TabPages/Protocols";
// import Orders from "./TabPages/Orders";
// import Banners from "./TabPages/Banners";
// import Seminars from "./TabPages/Seminars";
// import Promocodes from "./TabPages/Promocodes/Promocodes";

export default function Router() {
	const authData: any = useAuth();

	return (
		<Routes>
			<Route element={<FormLayout />}>
				<Route path={pathNames.login} element={<Login authData={authData} />} />
				<Route
					path={pathNames.register}
					element={<Register authData={authData} />}
				/>
			</Route>
			<Route element={<ProtectedRoutes isAuth={authData.isAuth} />}>
				<Route
					path="/"
					element={<Layout handleLogout={authData.handleLogout} />}
				>
					<Route path={pathNames.products} element={<Products />} />
					<Route path={pathNames.users} element={<Users />} />
					<Route path={pathNames.category} element={<Category />} />
					{/*<Route path={pathNames.cities} element={<Cities />} />*/}
					{/*<Route path={pathNames.brands} element={<Brands />} />*/}
					{/* <Route path={pathNames.protocols} element={<Protocols />} />
					<Route path={pathNames.orders} element={<Orders />} />
					<Route path={pathNames.banners} element={<Banners />} />
					<Route path={pathNames.seminars} element={<Seminars />} /> */}
					{/* <Route path={pathNames.promocodes} element={<Promocodes />} /> */}
					<Route path="/*" element={<div>404</div>} />
				</Route>
			</Route>
		</Routes>
	);
}

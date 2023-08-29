import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Form } from "formik";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
	fetchAuthentication,
	setUserData,
} from "../../store/features/AuthSlice";
import { pathNames } from "../../constants/path";
import { validationSchema } from "../../constants/validationSchema";

import Button from "../UI/Form/components/Button/Button";
import RememberMe from "../UI/Form/components/RememberMe/RememberMe";
import FormField from "../UI/Form/components/Input/FormField";

import style from "./FormLayout.module.scss";

export default function Login() {
	const dispatch = useAppDispatch();
	const userData = useAppSelector(state => state.auth.userData);
	const rememberMe = useAppSelector(state => state.auth.rememberMe);
	const errorMessage = useAppSelector(state => state.auth.error);
	const navigate = useNavigate();

	async function handleSubmit({
		email,
		password,
	}: {
		email: string;
		password: string;
	}) {
		try {
			dispatch(
				fetchAuthentication({
					email,
					password,
				})
			);
		} catch (error) {
			console.log(error);
		}
	}
	useEffect(() => {
		const isAuth = localStorage.getItem("isAuth");
		if (isAuth) {
			dispatch(setUserData(isAuth));
		}
		if (userData) {
			navigate("/");
			if (rememberMe) {
				localStorage.setItem("isAuth", JSON.stringify(userData));
			}
		}
	}, [dispatch, userData, navigate]);

	useEffect(() => {
		if (userData) {
			navigate("/");
		}
	}, []);
	return (
		<>
			<div className={style.mainForm__header}>
				<h3 className={style.mainForm__title}>Вход в учётную запись</h3>
			</div>
			<div className={style.mainForm__body}>
				<Formik
					validationSchema={validationSchema}
					initialValues={{ email: "", password: "" }}
					validateOnChange={false}
					onSubmit={handleSubmit}
				>
					<Form className={style.mainForm__form} noValidate>
						<div className={style["mainForm__form-wrapper"]}>
							<FormField
								id={"email"}
								name="email"
								fieldType={"email"}
								hasLabel={true}
								labelText={"E-mail"}
								placeholder={"Введите свой e-mail"}
							/>
							<FormField
								id={"password"}
								name="password"
								fieldType={"password"}
								hasLabel={true}
								labelText={"Пароль"}
								placeholder={"Введите свой пароль"}
							/>
						</div>
						<RememberMe remember={rememberMe} />
						<div className={style["mainForm__buttons-wrapper"]}>
							<span className={style.mainForm__error}>{errorMessage}</span>
							<div className={style.mainForm__button}>
								<Button typeButton={"submit"} nameButton={"Войти"} />
							</div>
							<div className={style.mainForm__button}>
								<Link
									to={pathNames.register}
									aria-label="register"
									className={style.mainForm__register}
								>
									У меня еще нет аккаунта
								</Link>
							</div>
						</div>
					</Form>
				</Formik>
			</div>
		</>
	);
}

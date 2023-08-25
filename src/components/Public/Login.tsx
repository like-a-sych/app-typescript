import { Link } from "react-router-dom";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { pathNames } from "../../constants/path";
import { IAuthData } from "../../interfaces/authData";

import Button from "../UI/Form/components/Button/Button";
import RememberMe from "../UI/Form/components/RememberMe/RememberMe";
import FormField from "../UI/Form/components/Input/FormField";

import style from "./FormLayout.module.scss";
import { fetchAuthentication } from "../../store/features/AuthSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";

interface ILogin {
	authData: IAuthData;
}

// const SignupSchema = Yup.object().shape({
// 	firstName: Yup.string()
// 		.min(2, "Too Short!")
// 		.max(50, "Too Long!")
// 		.required("Required"),
// 	lastName: Yup.string()
// 		.min(2, "Too Short!")
// 		.max(50, "Too Long!")
// 		.required("Required"),
// 	email: Yup.string().email("Invalid email").required("Required"),
// });

const validationSchema = Yup.object().shape({
	email: Yup.string().required("Обязательное поле").email("Неверный email"),
	password: Yup.string().required("Обязательное поле"),
});

export default function Login({ authData }: ILogin) {
	const dispatch = useAppDispatch();
	const userData = useAppSelector(state => state.auth.userData);
	console.log(userData);

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
					onSubmit={({ email, password }, { setSubmitting }) => {
						try {
							dispatch(
								fetchAuthentication({
									email,
									password,
								})
							);
							localStorage.setItem("isAuth", JSON.stringify(true));
						} catch (error) {
							console.log(error);
						}
					}}
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
						<RememberMe
							remember={authData.rememberMe}
							setRemember={authData.setRemember}
						/>
						<div className={style["mainForm__buttons-wrapper"]}>
							<span className={style.mainForm__error}>
								{authData.errorMessage}
							</span>
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

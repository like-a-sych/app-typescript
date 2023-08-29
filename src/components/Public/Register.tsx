import { Link, useNavigate } from "react-router-dom";
import { Formik, Form } from "formik";
import { pathNames } from "../../constants/path";

import Button from "../UI/Form/components/Button/Button";

import style from "./FormLayout.module.scss";
import { FormSchema, validationSchema } from "../../constants/validationSchema";
import { fetchRegistration } from "../../store/features/AuthSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import FormField from "../UI/Form/components/Input/FormField";
import { useEffect } from "react";

export default function Register() {
	const dispatch = useAppDispatch();
	const userData = useAppSelector(state => state.auth.userData);
	const errorMessage = useAppSelector(state => state.auth.error);
	const navigate = useNavigate();
	async function handleRegistration({
		email,
		password,
	}: {
		email: string;
		password: string;
	}) {
		try {
			dispatch(
				fetchRegistration({
					email,
					password,
				})
			);
		} catch (error) {
			console.log(error);
		}
	}
	useEffect(() => {
		if (userData) {
			navigate("/");
		}
	}, [dispatch, userData, navigate]);
	return (
		<>
			<div className={style.mainForm__header}>
				<h3 className={style.mainForm__title}>Создание учетной записи</h3>
			</div>
			<Formik
				className={style.mainForm__body}
				validationSchema={FormSchema}
				initialValues={{ email: "", password: "" }}
				validateOnChange={false}
				onSubmit={handleRegistration}
			>
				<Form noValidate>
					<div className={style["mainForm__form-wrapper"]}>
						<FormField
							id={"email"}
							fieldType={"email"}
							name="email"
							hasLabel={true}
							labelText={"E-mail"}
							placeholder={"Введите свой e-mail"}
						/>
						<FormField
							id={"password"}
							fieldType={"password"}
							hasLabel={true}
							labelText={"Пароль"}
							placeholder={"Введите свой пароль"}
							name="password"
						/>
						<FormField
							id={"passwordRepeat"}
							fieldType={"password"}
							hasLabel={true}
							labelText={"Повторите пароль"}
							placeholder={"Повторите пароль"}
							name="confirm"
						/>
					</div>
					<div className={style["mainForm__buttons-wrapper"]}>
						<span className={style.mainForm__error}>{errorMessage}</span>
						<div className={style.mainForm__button}>
							<Button typeButton={"submit"} nameButton={"Регистрация"} />
						</div>
						<div className={style.mainForm__button}>
							<Link
								to={pathNames.login}
								aria-label="login"
								className={style.mainForm__register}
							>
								У меня уже есть аккаунт
							</Link>
						</div>
					</div>
				</Form>
			</Formik>
		</>
	);
}

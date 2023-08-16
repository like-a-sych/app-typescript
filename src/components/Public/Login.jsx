import React from "react";
import { Link } from "react-router-dom";
import { pathNames } from "../../constants/path";
import Input from "../UI/Form/components/Input/Input";
import Button from "../UI/Form/components/Button/Button";
import RememberMe from "../UI/Form/components/RememberMe/RememberMe";
import style from "./FormLayout.module.scss";

export default function Login({ authData }) {
	return (
		<>
			<div className={style.mainForm__header}>
				<h3 className={style.mainForm__title}>Вход в учётную запись</h3>
			</div>
			<div className={style.mainForm__body}>
				<form
					className={style.mainForm__form}
					onSubmit={authData.handlerSubmitForm}
				>
					<div className={style["mainForm__form-wrapper"]}>
						<Input
							id={"email"}
							fieldType={"email"}
							hasLabel={true}
							labelText={"E-mail"}
							placeholder={"Введите свой e-mail"}
						/>
						<Input
							id={"password"}
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
				</form>
			</div>
		</>
	);
}

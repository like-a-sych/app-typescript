import React from "react";
import { Link } from "react-router-dom";
import { pathNames } from "../../constants/path";
import Input from "../UI/Form/components/Input/Input";
import Button from "../UI/Form/components/Button/Button";
import style from "./FormLayout.module.scss";
import { IAuthData } from "../../interfaces/authData";

interface IRegister {
	authData: IAuthData;
}

export default function Register({ authData }: IRegister) {
	return (
		<>
			<div className={style.mainForm__header}>
				<h3 className={style.mainForm__title}>Создание учетной записи</h3>
			</div>
			<div className={style.mainForm__body}>
				<form
					className={style.mainForm__form}
					onSubmit={authData.handlerRegistration}
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
						<Input
							id={"passwordRepeat"}
							fieldType={"password"}
							hasLabel={true}
							labelText={"Повторите пароль"}
							placeholder={"Повторите пароль"}
						/>
					</div>

					<div className={style["mainForm__buttons-wrapper"]}>
						<span className={style.mainForm__error}>
							{authData.errorMessage}
						</span>
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
				</form>
			</div>
		</>
	);
}

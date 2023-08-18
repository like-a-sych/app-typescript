import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { pathNames } from "../constants/path";

const loginUrl = "https://myshop-api.onrender.com/api/user/login"; //адреса серверов для авторизации пользователей
const registrationUrl = "https://myshop-api.onrender.com/api/user/registration";

export function useAuth() {
	//const [isAuth, setAuth] = useState(localStorage.getItem("isAuth")); //состояние для проверки залогинен пользователь или нет, в состоянии проверяем ставил ли пользователь галочку на "помни меня"

	const [isAuth, setAuth] = useState(true); //! тестовая авторизация

	const [rememberMe, setRemember] = useState(false); //*состояние для галочки "помни меня"
	const [errorMessage, setErrorMessage] = useState(""); //стейт для вывода ошибок при регистрации
	const [user, setUser] = useState(null); //тут хранятся данные после авторизации, которые получены от сервера
	const navigate = useNavigate();

	const goBack = useCallback(() => {
		//*переадресация на главную страницу
		navigate("/");
	}, [navigate]);

	async function handlerSubmitForm(event: React.FormEvent) {
		//*обработчик для кнопки войти с учетными данными
		event.preventDefault();
		try {
			let response = await axios.post(loginUrl, {
				//асинхронно через post получаем от сервера ответ после ввода логина и пароля и записываем его в стейт user
				username: event.target.email.value,
				password: event.target.password.value,
			});
			setUser(response.data);
			localStorage.setItem("isAuth", true);
		} catch (error) {
			setErrorMessage(error.response.data.message);
		}
	}

	function handlerRegistration(event) {
		//*обработчик для кнопки регистрация
		event.preventDefault();
		if (event.target.password.value === event.target.passwordRepeat.value) {
			//делаем проверку полей пароля и повторения пароля, если все ок, то отправляем post запрос на сервер с данными из input,далее если токен получен, перебрасываем на страницу входа, иначе выводим ошибки
			axios
				.post(registrationUrl, {
					username: event.target.email.value,
					password: event.target.password.value,
				})
				.then(response => {
					setUser(response.data.token);
					event.target.reset();
				})
				.catch(error => {
					if (error.response.data.message.errors) {
						let errMess = error.response.data.message.errors;
						errMess.forEach(element => {
							setErrorMessage(element.msg);
						});
					} else {
						let errMess = error.response.data.message;
						setErrorMessage(errMess);
					}
				});
		} else {
			setErrorMessage("Введи пароль нормально, ок?");
		}
	}

	function handleLogout() {
		//*обработчик для разлогинивания
		setAuth(!isAuth);
		navigate(pathNames.login);
		setRemember(false);
		localStorage.removeItem("isAuth");
	}

	useEffect(() => {
		//use effect который проверяет user, если он существует, то меняет стейт авторизации и пускает в приватный роутинг
		setErrorMessage("");
		if (user) {
			setAuth(true);
			goBack();
			setUser(null);
		}
	}, [user, isAuth, goBack]);

	return {
		errorMessage,
		handlerSubmitForm,
		handlerRegistration,
		setAuth,
		isAuth,
		handleLogout,
		rememberMe,
		setRemember,
	};
}

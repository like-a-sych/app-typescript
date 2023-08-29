import * as Yup from "yup";

// eslint-disable-next-line no-useless-escape
// const emailRegex = new RegExp("^[a-zA-Z0-9._-]+@[a-zA-Z0-9]+[.][a-zA-Z0-9]*$");

// console.log(emailRegex);
export const validationSchema = Yup.object().shape({
	email: Yup.string()
		.required("Обязательное поле")
		// .matches(emailRegex, "Неверный email")
		.email("Неверный email"),

	password: Yup.string()
		.required("Обязательное поле")
		.min(2, "Пароль должен быть больше 2 символов"),
});

export const FormSchema = Yup.object().shape({
	email: Yup.string()
		.required("Обязательное поле")
		// .matches(emailRegex, "Неверный email")
		.email("Неверный email"),
	pass: Yup.string()
		.min(4, "Пароль должен быть длиннее 4 символов")
		.matches(/[0-9]/, "Password requires a number")
		.matches(/[a-z]/, "Password requires a lowercase letter"),
	confirm: Yup.string().oneOf(
		[Yup.ref("password"), null],
		"Пароли не совпадают"
	),
});

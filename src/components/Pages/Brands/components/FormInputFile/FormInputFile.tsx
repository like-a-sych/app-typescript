import { Form, Formik } from "formik";
import style from "./FormInputFile.module.scss";
import { validationSchema } from "../../../../../constants/validationSchema";

export default function FormInputFile() {
	return (
		<Formik
			validationSchema={validationSchema} //TODO переделать валидацию инпутов
			initialValues={{ text: "", file: [] }}
			validateOnChange={false}
			onSubmit={() => {}}
		>
			<Form className={style["input-block"]}>
				<div className={style["input-block__item"]}>
					<input
						type="text"
						className={style["input-block__input"]}
						placeholder="Введите название бренда"
					/>
				</div>
				<div className={style["input-block__item"]}>
					<input
						type="text"
						className={style["input-block__input"]}
						placeholder="Загрузите логотип бренда"
					/>
					<label className={style["input-block__label"]}>
						<input type="file" className={style["input-block__input"]} />
					</label>
					<span>Размер логотипа 500x500 px PNG, JPG, JPEG</span>
				</div>
				<button className={style["input-block__button"]} type="submit">
					Добавить
				</button>
			</Form>
		</Formik>
	);
}

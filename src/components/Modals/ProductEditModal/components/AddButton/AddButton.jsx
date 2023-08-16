import style from "./AddButton.module.scss";

export default function AddButton({ text }) {
	return <button className={style["add-button"]}>{text}</button>;
}

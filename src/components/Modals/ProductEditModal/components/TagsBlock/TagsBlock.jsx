import style from "./TagsBlock.module.scss";

export default function TagsBlock({ children }) {
	return <div className={style["tags-block"]}>{children}</div>;
}

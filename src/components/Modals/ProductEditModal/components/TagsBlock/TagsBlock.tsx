import style from "./TagsBlock.module.scss";

interface ITagsBlock {
	children: JSX.Element | JSX.Element[];
}

export default function TagsBlock({ children }: ITagsBlock) {
	return <div className={style["tags-block"]}>{children}</div>;
}

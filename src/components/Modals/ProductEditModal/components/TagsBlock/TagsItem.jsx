import style from "./TagsBlock.module.scss";

export default function TagsItem({ nameTag, id, callback }) {
	function getId() {
		callback(id);
	}
	return (
		<div className={style["tags-block__item"]}>
			<span>
				{nameTag}
				<button id={id} onClick={getId} type="button">
					<svg
						width="16"
						height="16"
						viewBox="0 0 16 16"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<g id="Control/en-cancel-fill" clipPath="url(#clip0_605_6427)">
							<path
								id="Vector"
								d="M10 11L11 10L9 8L11 6L10 5L8 7L6 5L5 6L7 8L5 10L6 11L8 9L10 11Z"
								fill="#414348"
							/>
						</g>
						<defs>
							<clipPath id="clip0_605_6427">
								<rect width="16" height="16" fill="white" />
							</clipPath>
						</defs>
					</svg>
				</button>
			</span>
		</div>
	);
}

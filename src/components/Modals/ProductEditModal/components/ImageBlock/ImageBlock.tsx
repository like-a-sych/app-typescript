import { Fragment, memo } from "react";
import HelpSpan from "../HelpSpan/HelpSpan";

import style from "./ImageBlock.module.scss";
import coreStyle from "../../ProductEditModal.module.scss";

interface IImageBlock {
	labelFields: any;
	deleteImage?: () => void;
	images: string[];
}

function ImageBlock({ labelFields, deleteImage, images }: IImageBlock) {
	function getIndex(e: React.MouseEventHandler<HTMLButtonElement>) {
		// deleteImage();
	}
	return (
		<div className={style["image-block"]}>
			<div className={coreStyle["title"]}>{labelFields.image}</div>
			<fieldset className={style["image-block__item"]}>
				{images.length > 0 ? (
					<div className={style["image-block__wrapper"]}>
						{images.map((item: any, index: number) => (
							// TODO: Вынести в отдельный компонент и c помощью memo делать проверку на входящую ссылку: string
							<Fragment key={`id-${index}${Math.random()}`}>
								<div className={style["image-block__picture"]}>
									<img
										src={item}
										className={style["image-block__image"]}
										alt="pictures"
									></img>
								</div>
								<span className={style["image-block__description"]}>
									{item}
								</span>
								<button
									title="button"
									data-src={item}
									className={style["image-block__delete"]}
									// onClick={getIndex}
									type="button"
								></button>
							</Fragment>
						))}
					</div>
				) : (
					<div>Тут пусто...</div>
				)}
			</fieldset>
			<fieldset className={style["image-block__item"]}>
				<label className={style["image-block__upload"]}>
					<input
						type="text"
						className={style["image-block__upload-source"]}
						placeholder="Вставьте ссылку на Google Drive"
					></input>
				</label>
				<HelpSpan>
					<>Максимум 5 изображений</>
					<>Размер фото 1000x1000 px PNG, JPG, JPEG</>
				</HelpSpan>
			</fieldset>
		</div>
	);
}

export default memo(ImageBlock, (prevProps, nextProps) => {
	return prevProps.images.length === nextProps.images.length;
});

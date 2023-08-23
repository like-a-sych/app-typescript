import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../../store/hooks";
import { labelFields } from "./labelFields";
import {
	InputContainer,
	InputDeleteBlock,
	ImageBlock,
	HelpSpan,
	TagsBlock,
	TagsItem,
	TextareaBlock,
	InputList,
	SelectProductModal,
	CategoryModalBlock,
} from "./components";

import ModalButton from "../../UI/Modal/components/Button/ModalButton";
import HeaderModal from "../../UI/Modal/components/HeaderModal/HeaderModal";
import LabelInput from "../../UI/Modal/components/LabelInput/LabelInput";

import style from "./ProductEditModal.module.scss";

import type { IProduct } from "../../../interfaces/mocksInterfaces";
import type { IModalState } from "../../../store/features/ModalSlice";

function PurchaseEditModal(): JSX.Element {
	const dispatch = useDispatch();

	const ItemId = useAppSelector(state => state.modal.id);
	const data = useAppSelector(state => state.products.products);

	const [position, setPosition] = useState(null);
	const [subData, setSubData] = useState([]);
	const [dataRowModal, setDataRowModal] = useState<IProduct>(
		data.filter(item => item.id === ItemId)[0]
	);

	const [charstics, setCharstics] = useState(dataRowModal.characteristics);
	const [images, setImages] = useState(dataRowModal.images);
	const [tags, setTags] = useState(dataRowModal.tags);
	const [onSave, setOnSave] = useState({});

	//=======================
	//функция для удаления локально характеристик
	function deleteRowCharstics(id: string) {
		const newArr = charstics.filter(item => {
			return item.id !== id;
		});
		setCharstics(newArr);
		setOnSave(prev => {
			return { ...prev, characteristics: newArr };
		});
	}
	//функция для удаления локально картинок
	function deleteImage(data: string | undefined) {
		const newArr = images.filter(item => {
			return item !== data;
		});
		setImages(newArr);
		setOnSave(prev => {
			return { ...prev, images: newArr };
		});
	}
	//функция для удаления локально тегов
	function deleteTag(id: string) {
		const newArr = tags.filter(item => {
			return item.id !== id;
		});
		setTags(newArr);
		setOnSave(prev => {
			return { ...prev, tags: newArr };
		});
	}

	//TODO сделать удаление объема

	// function selectCategory(e: any) {
	// 	setPosition(e.target.value);
	// }

	// useEffect(() => {
	//   setSubData(() => {
	//     return dataModal.filter((item) => {
	//       return item.sub_catalog_product.position === +position;
	//     });
	//   });
	// }, [position]);
	//=============================================

	return (
		<form className={style["edit-sales"]}>
			<HeaderModal>
				<ModalButton
					textButton={"Сохранить"}
					click={() => console.log(onSave)}
				/>
				<ModalButton
					textButton={"Сохранить и закрыть"}
					click={() => console.log(dataRowModal)}
				/>
			</HeaderModal>
			<hr />
			<div className={style["edit-sales__body"]}>
				<div className={style["edit-sales__item"]}>
					<InputList>
						<LabelInput
							type="text"
							value={dataRowModal.nameFrom1C}
							label={labelFields.nameFrom1C}
							disable
						/>
						<LabelInput
							type="text"
							value={dataRowModal.nameFrom1C}
							label={labelFields.name}
						/>
						<SelectProductModal
							dataBrands={data}
							valueCurrentItem={dataRowModal.name}
						></SelectProductModal>
						<LabelInput
							type="text"
							value={dataRowModal.codeFrom1C}
							label={labelFields.codeFrom1C}
							disable
						/>
					</InputList>
					<TextareaBlock value={dataRowModal.name} labelFields={labelFields} />
				</div>
				<div className={style["edit-sales__item"]}>
					<ImageBlock
						labelFields={labelFields}
						deleteImage={deleteImage}
						images={images}
					/>
				</div>

				<div className={style["edit-sales__item"]}>
					<InputList>
						<LabelInput
							type="text"
							value={dataRowModal.price}
							label={labelFields.price}
							disable
						/>
					</InputList>
				</div>
				{/* <div className={style["edit-sales__item"]}>
					<CategoryModalBlock
						// categories={dataModal}
						selectCategory={selectCategory}
						// position={position}
					/>
				</div> */}
				<div className={style["edit-sales__item"]}>
					<InputContainer
						title={labelFields.volume}
						textButton={"+ Добавить объем"}
					>
						{dataRowModal.variations ? (
							dataRowModal.variations.map(item => (
								<InputDeleteBlock
									key={item.id}
									id={item.id}
									value1={item.code}
									value2={item.value}
									placeholder1="Объем"
									placeholder2="Значение"
									deleteRowButton={deleteRowCharstics}
								/>
							))
						) : (
							<InputDeleteBlock
								disable
								key={`id-${Math.random()}`}
								id={`id-${Math.random()}`}
								value1={""}
								value2={""}
								placeholder1="Объем"
								placeholder2="Значение"
								deleteRowButton={deleteRowCharstics}
							/>
						)}
					</InputContainer>
				</div>
				<div className={style["edit-sales__item"]}>
					<InputContainer
						title={labelFields.features}
						textButton={"+ Добавить характеристику"}
						helpText={"Максимум 15 характеристик"}
					>
						{charstics.length > 0 ? (
							charstics.map(item => (
								<InputDeleteBlock
									id={item.id}
									key={item.id}
									value1={item.key}
									value2={item.value}
									placeholder1="Название характеристики"
									placeholder2="Значение характеристики"
									deleteRowButton={deleteRowCharstics}
								/>
							))
						) : (
							<InputDeleteBlock
								disable
								key={`id-${Math.random()}`}
								id={`id-${Math.random()}`}
								value1={""}
								value2={""}
								placeholder1="Название характеристики"
								placeholder2="Значение характеристики"
								deleteRowButton={deleteRowCharstics}
							/>
						)}
					</InputContainer>
				</div>
				<div className={style["edit-sales__item"]}>
					<div className={style["tags"]}>
						<div className={style["title"]}>{labelFields.tags}</div>
						<TagsBlock>
							{tags.map(item => (
								<TagsItem
									id={item.id}
									key={item.id}
									nameTag={item.name}
									callback={deleteTag}
								/>
							))}
						</TagsBlock>
						<HelpSpan>
							<>Максимум 120 тэгов</>
						</HelpSpan>
					</div>
				</div>
			</div>
		</form>
	);
}
export default PurchaseEditModal;

import { useEffect, useState } from "react";

export function useTableCheckbox(data: any[]) {
	const [checkedItemsArray, setCheckedItemsArray] = useState<string[]>([]);
	const [openPopup, setOpenPopup] = useState(false); // дефолтное состояние popup
	function deleteCellTable() {
		//функция для удаления выделенных чекбоксом полей и отрисовки нового массива
		for (let i = 0; i < data.length; i++) {
			if (checkedItemsArray.includes(data[i].id)) {
				data.splice(i, 1);
				i--;
			}
		}
		setCheckedItemsArray([]);
	}

	function PopUpToggle() {
		setOpenPopup(prev => !prev);
	}

	const isAllChecked =
		Boolean(checkedItemsArray.length) &&
		checkedItemsArray.length === data.length;

	function checkboxHandler(id: string) {
		//обработчик для добавления чекбокса одному полю отображаемой таблицы
		setCheckedItemsArray(prev => {
			if (prev.includes(id)) {
				return prev.filter(item => item !== id);
			} else {
				return [...prev, id];
			}
		});
		//фильтруем массив и возвращаем новый без находящегося в нем id
		//иначе если id в массиве нет, разворачиваем старый массив и добавляем туда новый id
	}

	function allClick() {
		const newArr = data.map(item => item.id); // создаем новый массив в который помещаем все id полей отображаемой таблицы

		if (newArr.length === checkedItemsArray.length) {
			// если массив выбранных полей таблицы равен выбранным полям по одному
			return setCheckedItemsArray([]); // то сбрасываем значение массива до пустого
		}
		setCheckedItemsArray(newArr); //иначе добавляем оставшиеся поля таблицы в массив
	}
	useEffect(() => {
		// стейт для вызова попапа, когда выделяешь чекбоксы таблицы
		if (checkedItemsArray.length === 0) {
			setOpenPopup(false);
		} else {
			setOpenPopup(true);
		}
	}, [checkedItemsArray]);
	return {
		allClick,
		checkboxHandler,
		isAllChecked,
		deleteCellTable,
		checkedItemsArray,
		PopUpToggle,
		openPopup,
	};
}

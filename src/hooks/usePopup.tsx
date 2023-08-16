import { useEffect, useState } from "react";

interface IUsePopupProps {
	checkedItemsArray: string[];
}

export function usePopup({ checkedItemsArray }: IUsePopupProps) {
	const [openPopup, setOpenPopup] = useState(false); // дефолтное состояние popup
	function PopUpToggle() {
		setOpenPopup(prev => !prev);
	}

	useEffect(() => {
		// стейт для вызова попапа, когда выделяешь чекбоксы таблицы
		if (checkedItemsArray.length === 0) {
			setOpenPopup(false);
		} else {
			setOpenPopup(true);
		}
	}, [checkedItemsArray]);

	return { PopUpToggle, openPopup };
}

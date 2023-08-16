export interface IContext {
	modalState: {
    idModal: string;
    dataRow: {};
    isOpen: boolean;
    data: {};
	};
	setModalState?: React.Dispatch<React.SetStateAction<{
    idModal: string;
    dataRow: {};
    isOpen: boolean;
    data: {};
	}>>
};
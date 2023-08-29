import { createContext } from "react";
// import type {IContext} from "../interfaces/context";

export const defaultContext: any = {
	modalState: {
		idModal: "",
		dataRow: {},
		isOpen: false,
		data: {},
	},
};

export const MainContext = createContext<any>(defaultContext);

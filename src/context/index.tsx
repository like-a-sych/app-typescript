import { createContext } from "react";
import type {IContext} from "../interfaces/context";

export const defaultContext: IContext = {
	modalState: {
		idModal: "",
		dataRow: {},
		isOpen: false,
		data: {},
	}}



export const MainContext = createContext<IContext>(defaultContext);

import { ActionCreatorWithPayload } from "@reduxjs/toolkit";

export interface IAuthData {
    errorMessage: string;
    handlerSubmitForm: (event: React.FormEvent<Element>) => Promise<void>;
    handlerRegistration: () => void;
    setAuth: ActionCreatorWithPayload<any, "auth/setAuth">;
    isAuth: boolean;
    handleLogout: () => void;
    rememberMe: boolean;
    setRemember: ActionCreatorWithPayload<any>;
}
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from "axios";


interface IAuthDataState {
	isLoading: boolean;
	error: string;
	rememberMe: boolean;
	userData: string | null;
};
interface IAuthDataResponse {
	token: string;
};
interface IAuthStateObj {
		email: string;
		password: string;
}

const loginUrl = "https://myshop-api.onrender.com/api/user/login"; //адреса серверов для авторизации пользователей
const registrationUrl = "https://myshop-api.onrender.com/api/user/registration";

const initialState:IAuthDataState = {
	isLoading: false,
	error:'',
	rememberMe: false,
	userData: null,
}


export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
		setRemember:(state, action) => {
			state.rememberMe = action.payload
    },
		logOut:(state) => {
			state.userData = null;
			localStorage.removeItem("isAuth");
		},
		setUserData: (state, action)=> {
			state.userData = action.payload
		}
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchAuthentication.pending, (state)=> {
				state.isLoading = true;
			})
			.addCase(fetchAuthentication.fulfilled, (state, action) => {
				state.isLoading = false;
				state.error = '';
				state.userData = action.payload.token;
			})
			.addCase(fetchAuthentication.rejected, (state,action)=> {
				state.isLoading= false;
				if (typeof action.payload === 'string') {
					state.error = action.payload;
				} else {
					state.error = 'error'
				}
			})
			.addCase(fetchRegistration.pending, (state)=> {
				state.isLoading = true;
			})
			.addCase(fetchRegistration.fulfilled, (state, action) => {
				state.isLoading = false;
				state.error = '';
				state.userData = action.payload.token;
			})
			.addCase(fetchRegistration.rejected, (state,action)=> {
				state.isLoading= false;
				if (typeof action.payload === 'string') {
					state.error = action.payload;
				} else {
					state.error = 'error'
				}
			})
	}
	
})

export const fetchAuthentication = createAsyncThunk<IAuthDataResponse, IAuthStateObj, { rejectValue: any }>(
  "auth/fetchAuthentication",
  async ({email, password}, { rejectWithValue }) => {
		try {
			let response = await axios.post<IAuthDataResponse>(loginUrl, {
				//асинхронно через post получаем от сервера ответ после ввода логина и пароля и записываем его в стейт user
					username:email, password		
			});
			return response.data;
		} catch (error:any) {
			return rejectWithValue(error.response.data.message)
		}
  }
);

export const fetchRegistration = createAsyncThunk<any, IAuthStateObj, { rejectValue: any }>(
  "auth/fetchRegistration",
  async ({email, password}, { rejectWithValue }) => {
			try {	
				let response = await axios.post<IAuthDataResponse>(registrationUrl, {
						username:email, password		
				});
				return response.data;
			}	catch (error: any) {
					if (error.response.data.message.errors) {
						let errMess = error.response.data.message.errors;
						console.log(errMess[0].msg);
						// errMess.forEach((element:any) => {
						// 	return rejectWithValue(element.msg);
						// });
						return rejectWithValue(errMess[0].msg)
					} else {
						let errMess = error.response.data.message;
						return	rejectWithValue(errMess);
					}
				}
  }
);


export const {  setRemember, logOut, setUserData } = authSlice.actions

export default authSlice.reducer
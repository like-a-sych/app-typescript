import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from "axios";


interface IAuthDataState {
	isLoading: boolean;
	error: string;
	isAuth: boolean;
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

const initialState:IAuthDataState = {
	isLoading: false,
	error:'',
	isAuth: false,
	rememberMe: false,
	userData: null,
}

const loginUrl = "https://myshop-api.onrender.com/api/user/login"; //адреса серверов для авторизации пользователей
const registrationUrl = "https://myshop-api.onrender.com/api/user/registration";

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuth: (state, action) => {
			state.isAuth = action.payload
    },
		setRemember:(state, action) => {
			state.rememberMe = action.payload
    },
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
				console.log(response);
			return response.data;
		} catch (error:any) {
			console.log(error)
			return rejectWithValue(error.response.data.message)
		}
  }
);


export const { setAuth, setRemember } = authSlice.actions

export default authSlice.reducer
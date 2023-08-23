import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { IUsers } from '../../interfaces/mocksInterfaces';
import UserService from '../../services/userService';

interface IUsersState {
	isLoading: boolean;
	error: string;
  users:IUsers[];
	lastPage:number;
};

interface IUsersResponse {
  data:IUsers[];
	dataLength: number;
	lastPage: number;

};
interface IUsersStateObj {
	limitRowsOnPage: number;
	paginationObj: number;
	searchString?:string;
}

const initialState:IUsersState = {
	isLoading: false,
	error:'',
	users:[],
	lastPage:1,
}


export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setProducts: (state, action) => {
			state.users = action.payload
    }
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchLoadUsers.pending, (state)=> {
				state.isLoading = true;
			})
			.addCase(fetchLoadUsers.fulfilled, (state, action) => {
				state.isLoading = false;
				state.error = '';
				state.users = action.payload.data;
				state.lastPage = action.payload.lastPage;
			})
			.addCase(fetchLoadUsers.rejected, (state,action)=> {
				state.isLoading= false;
				if (typeof action.payload === 'string') {
					state.error = action.payload;
				} else {
					state.error = 'error'
				}
			})
	}
	
})

export const fetchLoadUsers = createAsyncThunk<IUsersResponse, IUsersStateObj, { rejectValue: any }>(
  "products/fetchLoadUsers",
  async ({	limitRowsOnPage,
		paginationObj, searchString}, { rejectWithValue }) => {
		try {
			const response = await UserService.getUsers(
			limitRowsOnPage,
			paginationObj,
			searchString
		);
		return response;
		} catch (error) {
			return rejectWithValue(error)
		}
  }
);


export const { setProducts } = usersSlice.actions

export default usersSlice.reducer
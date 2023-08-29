import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { IBrands } from '../../interfaces/mocksInterfaces';
import BrandsService from '../../services/brandsService';

interface IBrandsState {
	isLoading: boolean;
	error: string;
  brands:IBrands[];
};

interface IBrandsResponse {
  data:IBrands[];
};

const initialState:IBrandsState = {
	isLoading: false,
	error:'',
	brands:[],
}


export const brandsSlice = createSlice({
  name: 'brands',
  initialState,
  reducers: {
  
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchLoadBrands.pending, (state)=> {
				state.isLoading = true;
			})
			.addCase(fetchLoadBrands.fulfilled, (state, action) => {
				state.isLoading = false;
				state.error = '';
				state.brands = action.payload.data;
			})
			.addCase(fetchLoadBrands.rejected, (state,action)=> {
				state.isLoading= false;
				if (typeof action.payload === 'string') {
					state.error = action.payload;
				} else {
					state.error = 'error'
				}
			})
	}
	
})

export const fetchLoadBrands = createAsyncThunk<IBrandsResponse, { rejectValue?: any }>(
  "products/fetchLoadCatalogs",
  async (_, { rejectWithValue }) => {
		try {
			const response = await BrandsService.getBrands();
			return response;
		} catch (error) {
			return rejectWithValue(error)
		}
  }
);


// export const { setProducts } = brandsSlice.actions

export default brandsSlice.reducer
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { ICatalog, ISubCatalog } from '../../interfaces/mocksInterfaces';
import categoryService from '../../services/categoryService';


interface ICatalogDataState {
	isLoading: boolean;
	error: string;
	catalogs: {
		catalog:ICatalog[];
		subCatalog:ISubCatalog[];
	}
};

interface ICatalogDataResponse {
	data: {
		catalog:ICatalog[];
		subCatalog:ISubCatalog[];
	}
};

const initialState:ICatalogDataState = {
	isLoading: false,
	error:'',
	catalogs: {
		catalog:[],
		subCatalog:[],
	},

}


export const catalogsSlice = createSlice({
  name: 'catalog',
  initialState,
  reducers: {
    setCatalog: (state, action) => {
			state.catalogs = action.payload
    },		
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchLoadCatalogs.pending, (state)=> {
				state.isLoading = true;
			})
			.addCase(fetchLoadCatalogs.fulfilled, (state, action) => {
				state.isLoading = false;
				state.error = '';
				state.catalogs = action.payload.data;
			})
			.addCase(fetchLoadCatalogs.rejected, (state,action)=> {
				state.isLoading= false;
				if (typeof action.payload === 'string') {
					state.error = action.payload;
				} else {
					state.error = 'error'
				}
			})
	}
	
})

export const fetchLoadCatalogs = createAsyncThunk<ICatalogDataResponse, { rejectValue: any }>(
  "products/fetchLoadCatalogs",
  async (_, { rejectWithValue }) => {
		try {
			const response = await categoryService.getCatalogs();
			return response;
		} catch (error) {
			return rejectWithValue(error)
		}
  }
);


export const { setCatalog } = catalogsSlice.actions

export default catalogsSlice.reducer
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { IProduct } from '../../interfaces/mocksInterfaces';
import ProductService from '../../services/productService';

interface IProductsState {
	isLoading: boolean;
	error: string;
  products:IProduct[];
	lastPage:number;
	modalId:string;
};

interface IProductsResponse {
  data:IProduct[];
	dataLength: number;
	lastPage: number;

};
interface IProductStateObj {
	limitRowsOnPage: number;
	paginationObj: number;
	searchString?:string;
}

const initialState:IProductsState = {
	isLoading: false,
	error:'',
	products:[],
	lastPage:1,
	modalId: 'purchaseEdit',
}


export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, action) => {
			state.products = action.payload
    }
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchLoadProducts.pending, (state)=> {
				state.isLoading = true;
			})
			.addCase(fetchLoadProducts.fulfilled, (state, action) => {
				state.isLoading = false;
				state.error = '';
				state.products = action.payload.data;
				state.lastPage = action.payload.lastPage;
			})
			.addCase(fetchLoadProducts.rejected, (state,action)=> {
				state.isLoading= false;
				if (typeof action.payload === 'string') {
					state.error = action.payload;
				} else {
					state.error = 'error'
				}
			})
	}
	
})

export const fetchLoadProducts = createAsyncThunk<IProductsResponse, IProductStateObj, { rejectValue: any }>(
  "products/fetchLoadProducts",
  async ({	limitRowsOnPage,
		paginationObj, searchString}, { rejectWithValue }) => {
		try {
			const response = await ProductService.getProduct(
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


export const { setProducts } = productSlice.actions

export default productSlice.reducer
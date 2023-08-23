import { configureStore } from "@reduxjs/toolkit";

import { modalSlice } from "./features/ModalSlice";
import { productSlice } from "./features/ProductSlice";
import { usersSlice } from "./features/UserSlice";

export const store = configureStore({
	reducer: {
		modal: modalSlice.reducer,
		products: productSlice.reducer,
		users: usersSlice.reducer
	},
	
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;


export default store
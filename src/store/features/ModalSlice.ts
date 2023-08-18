import { createSlice } from '@reduxjs/toolkit'

import type { PayloadAction } from '@reduxjs/toolkit'

export interface IModalState {
  idModal: string;
  dataRow: {};
  isOpen: boolean;
};

const initialState: IModalState = {
    idModal: '',
    dataRow: {},
    isOpen: false,
}


export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    setModalState: (state, {payload}) => {
			state = payload;
    },
  },
})

// Action creators are generated for each case reducer function
export const { setModalState } = modalSlice.actions

export default modalSlice.reducer
import { createSlice } from '@reduxjs/toolkit'

export interface IModalState {
  idModal: string;
  isOpen: boolean;
	id: string | null;
};

const initialState: IModalState = {
    idModal: '',
    isOpen: false,
		id: null
}


export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    setModalState: (state, {payload}) => {
			state.idModal = payload.idModal
			state.isOpen = payload.isOpen
			state.id = payload.id
    },
		closeModal(state) {
			state.idModal = '';
			state.id = null;
		}
}})

// Action creators are generated for each case reducer function
export const { setModalState, closeModal } = modalSlice.actions

export default modalSlice.reducer
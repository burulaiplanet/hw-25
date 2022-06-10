import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	IsValid: false,
}

const spinnerSlice = createSlice({
	name: 'spinner',
	initialState,
	reducers: {
		spinnerHandler(state) {
			state.IsValid = !state.IsValid
		},
	},
})

export const spinnerActions = spinnerSlice.actions
export default spinnerSlice

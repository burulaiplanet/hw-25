import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	values:[],
	showForm:true
	
}
const authSlice = createSlice({
	name: 'auth',
	initialState: initialState,
	reducers: {
		loginin(state, action) {
			const newValue=action.payload
			state.values.push(newValue)
		},
		showForm(state){
			state.showForm=!state.showForm
		}
	},
})

export const authActions = authSlice.actions
export default authSlice

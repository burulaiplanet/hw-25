import { authActions} from '../reducer/authSlice'
import classes from './Form.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'

import { spinnerActions } from '../reducer/spinnerSlice'
import { useNavigate } from 'react-router-dom'
const Form = () => {
	const dispatch=useDispatch()
	const navigate=useNavigate()

	const store2 = useSelector((state) => state.auth.values)

	const [inputData, setInputData] = useState({
		
		gmailValue: '',
		passwordValue: '',
	})

	const formIsvalid=/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/.test(inputData.gmailValue)&&inputData.passwordValue.length>5


	const inputHandler = (e) => {
		const value = e.target.value
		setInputData({
			...inputData,
			[e.target.name]: value,
		})
		
	}


const  submitHandler=(event)=>{
	event.preventDefault()
	setTimeout(()=>{
		dispatch(spinnerActions.spinnerHandler())
		navigate('/Profile')
		dispatch(authActions.showForm())
	},2000)
	dispatch(authActions.loginin(inputData))
	dispatch(spinnerActions.spinnerHandler())
	
	localStorage.setItem('value',JSON.stringify(store2))
	setInputData({
		gmailValue: '',
		passwordValue: '',
	})
}


	return (
		<>
		<div className={classes.cart}>
		<form  onSubmit={submitHandler}>
			<div >
				<label>Email</label>
				<input type='email'  onChange={inputHandler} name='gmailValue' value={inputData.gmailValue}/>
			</div>
			<div>
				<label>Password</label>
				<input type='password' onChange={inputHandler}  	name='passwordValue'  value={inputData.passwordValue}/>
			</div>
			<button disabled={!formIsvalid} >Login</button>

		
		</form>

		</div>
		
		</>
	)
}

export default Form

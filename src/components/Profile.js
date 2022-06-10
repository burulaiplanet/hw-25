import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { spinnerActions } from '../reducer/spinnerSlice'
import { authActions } from '../reducer/authSlice'
import classes from './Form.module.css'

const Profile = () => {
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const timeSpinner = () => {
		setTimeout(() => {
			dispatch(spinnerActions.spinnerHandler())
			navigate('/')
			dispatch(authActions.showForm())
		}, 2000)
		dispatch(spinnerActions.spinnerHandler())
	}

	return (
		<section className={classes.profile}>
			<div >
				<img
					src='https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png'
					alt=''
				/>
				<h5>Name</h5>
			</div>
			<button onClick={timeSpinner}>Exit</button>
		</section>
	)
}
export default Profile

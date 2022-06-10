import Form from './components/Form'

import './App.css'
import { useSelector } from 'react-redux'
import Profile from './components/Profile'
import { Route, Routes ,Link} from 'react-router-dom'
function App() {
	const store = useSelector((state) => state.spinner.IsValid)
  const store2=useSelector(state=>state.auth.showForm)
	return (
		<div className='App'>
		{store2&&<Form/>}	
			<Routes>
				
				<Route path='Profile' element={<Profile />} />
      
			</Routes>
			{store && (
				<div className='lds-spinner'>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
				</div>
			)}
		</div>
	)
}

export default App

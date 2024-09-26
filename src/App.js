import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/main/Main';

import LoginForm from './pages/user/LoginForm';
import JoinForm from './pages/user/JoinForm';
import JoinOk from './pages/user/JoinOk';
import ModifyForm from './pages/user/ModifyForm';

import AddList from './pages/guestbook/AddList';

// css
import './css/mysite.css';

function App() {
	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route path='' element={<Main />} />

					<Route path='/user/loginform' element={<LoginForm />} />
					<Route path='/user/joinform' element={<JoinForm />} />
					<Route path='/user/joinok' element={<JoinOk />} />
					<Route path='/user/modifyform' element={<ModifyForm />} />

					<Route path='/guestbook/addlist' element={<AddList />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
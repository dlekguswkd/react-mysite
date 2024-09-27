import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/main/Main';

import LoginForm from './pages/user/LoginForm';
import JoinForm from './pages/user/JoinForm';
import JoinOk from './pages/user/JoinOk';
import ModifyForm from './pages/user/ModifyForm';

import AddList from './pages/guestbook/AddList';
import DeleteForm from './pages/guestbook/DeleteForm';
import ItemGuest from './pages/guestbook/ItemGuest';

import AttachForm from './pages/attach/Form';
import Result from './pages/attach/Result';
import AttachForm2 from './pages/attach/Form2';

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
					<Route path='/guestbook/deleteform' element={<DeleteForm />} />
					<Route path='/guestbook/ItemGuest' element={<ItemGuest />} />

					<Route path='/attach/form' element={<AttachForm />} />
					<Route path='/attach/result' element={<Result />} />
					<Route path='/attach/form2' element={<AttachForm2 />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
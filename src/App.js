import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from './views/main/Index';

function App() {
	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route path='/index' element={<Index />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
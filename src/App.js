import { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

import './App.css';
import Home from './components/Home';
import MySheets from './components/MySheets';
import SubjectSearch from './components/SubjectSearch';
import CreateForm from './components/CreateForm';
import Content from './components/Content';

function App() {
	const navigate = useNavigate();

	const [content, setContent] = useState({
		title: '',
		subject: '',
		content: '',
	});

	function getActivity() {
		const url = 'https://cheatsheetmern.herokuapp.com/  ';

		fetch(url)
			.then((response) => response.json())
			.then((response) => {
				console.log(response);
			})
			.catch(console.error);
	}

	return (
		<div className='App'>
			<nav>
				<Home />
			</nav>

			<Routes>
				<Route path='/MySheets' element={<MySheets />} />
				<Route path='/subjectsearch' element={SubjectSearch} />
				<Route
					path='/create'
					element={<CreateForm content={content} setContent={setContent} />}
				/>
				<Route path='/content' element={<Content />} />
			</Routes>
		</div>
	);
}

export default App;

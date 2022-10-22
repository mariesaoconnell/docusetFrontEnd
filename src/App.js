import { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

import './App.css';
import Home from './components/Home';
import MySheets from './components/MySheets';
import SubjectSearch from './components/SubjectSearch';
import CreateForm from './components/CreateForm';
import Content from './components/Content';
import ContentList from './components/ContentList'


function App() {
	const navigate = useNavigate();

	const [renderContent, updateRenderedContent] = useState([]);

	function addContent(newContent){
		renderContent.unshift(newContent)
		navigate('/content');
	}

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
				<Home getActivity={getActivity} />
			</nav>

			<Routes>
				<Route path='/MySheets' element={<MySheets />} />
				<Route path='/subjectsearch' element={SubjectSearch} />
				<Route
					path='/create'
					element={<CreateForm addContent={addContent} />}
				/>
				<Route
					path='/content'
					element={<Content renderContent={renderContent} />}
				/>
			<Route path='/' element={<ContentList renderContent={renderContent} />}/>
			</Routes>

		</div>
	);
}

export default App;

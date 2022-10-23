import { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

import './App.css';
import Home from './components/Home';
import MySheets from './components/MySheets';
import SubjectSearch from './components/SubjectSearch';
import CreateForm from './components/CreateForm';
import Content from './components/Content';
import ContentList from './components/ContentList';

function App() {
	const navigate = useNavigate();

	const [sessionPosts, updateSessionPosts] = useState([]);

	function postState(post) {
		updateSessionPosts(post)
		let lastPostId = post.id;
		navigate('/content/' + lastPostId);
	}

	function getActivity() {
		const url = 'https://cheatsheetmern.herokuapp.com/  ';
		fetch(url)
			.then((response) => response.json())
			.then((response) => {})
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
				<Route path='/create' element={<CreateForm postState={postState} />} />
				<Route path='/content/:id' element={<Content sessionPosts={sessionPosts}/>} />

				{/* CONTENTLIST COMPONENT WILL RENDER RECENT POSTS */}
				<Route path='/' element={<ContentList />} />
			</Routes>
		</div>
	);
}

export default App;

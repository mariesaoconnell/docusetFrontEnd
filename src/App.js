import { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

import './App.css';
import Home from './components/Home';
import MySheets from './components/MySheets';
import SubjectSearch from './components/SubjectSearch';
import CreateForm from './components/CreateForm';
import Content from './components/Content';
import ContentList from './components/ContentList';
import EditPost from './components/EditPost';
import Delete from './components/Delete';


function App() {
	const [currentEditPost, setCurrentEditPost] = useState('');
	const [deletePost, setDeletePost] = useState('');
	const [sheets, updateSheets] = useState([]);

	function getActivity() {
		const url = 'https://cheatsheetmern.herokuapp.com/';
		fetch(url)
			.then((response) => response.json())
			.then((response) => {updateSheets(response)})
			.catch(console.error);
	}

	return (
		<div className='App'>
			

			<Routes>

				<Route  path='/MySheets' element={<MySheets className='mySheetsDisplay' sheets={sheets} getActivity={getActivity}/>} />

				<Route path='/subjectsearch' element={<SubjectSearch />} />

				<Route path='/create' element={<CreateForm />} />

				<Route path='/content/:id' element={<Content setCurrentEditPost={setCurrentEditPost} setDeletePost={setDeletePost}/>} />

				<Route path='/edit/:id' element={<EditPost currentEditPost={currentEditPost} />} />

				<Route path='/delete/:id' element={<Delete deletePost={deletePost}/>}/>
				{/* CONTENTLIST COMPONENT WILL RENDER RECENT POSTS */}

				<Route path='/' element={<Home />} getActivity={getActivity} />
			</Routes>
		</div>
	);
}

export default App;

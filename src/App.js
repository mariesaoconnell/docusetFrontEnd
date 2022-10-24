import { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

import './App.css';
import Home from './components/Home';
import MySheets from './components/mySheets components/MySheets';
import SubjectSearch from './components/nav components/SubjectSearch';
import CreateForm from './components/crud components/CreateForm';
import Content from './components/crud components/Content';
import ContentList from './components/feed component/ContentList';
import EditPost from './components/crud components/EditPost';
import Delete from './components/crud components/Delete';
import Header from './components/nav components/Header';
import Nav from './components/nav components/Nav';

function App() {
	const [currentEditPost, setCurrentEditPost] = useState('');
	const [deletePost, setDeletePost] = useState('');
	const [sheets, updateSheets] = useState([]);

	function getActivity() {
		const url = 'https://cheatsheetmern.herokuapp.com/';
		fetch(url)
			.then((response) => response.json())
			.then((response) => {
				updateSheets(response);
			})
			.catch(console.error);
	}

	return (
		<div className='App'>
			<nav>
				<Header />
				<Nav />
				<SubjectSearch getActivity={getActivity} />
			</nav>

			<Routes>
				<Route path='/' element={<Home />} />

				<Route
					path='/MySheets'
					element={
						<MySheets
							className='mySheetsDisplay'
							sheets={sheets}
							getActivity={getActivity}
						/>
					}
				/>

				<Route path='/subjectsearch' element={<SubjectSearch />} />
				<Route path='/create' element={<CreateForm />} />
				<Route
					path='/content/:id'
					element={
						<Content
							setCurrentEditPost={setCurrentEditPost}
							setDeletePost={setDeletePost}
						/>
					}
				/>
				<Route
					path='/edit/:id'
					element={<EditPost currentEditPost={currentEditPost} />}
				/>
				<Route
					path='/delete/:id'
					element={<Delete deletePost={deletePost} />}
				/>
			</Routes>
		</div>
	);
}

export default App;

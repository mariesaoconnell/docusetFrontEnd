import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';
import Home from './components/Home';
import MySheets from './components/mySheets components/MySheets';
import SubjectSearch from './components/nav components/subsearch component/SubjectSearch';
import CreateForm from './components/crud components/CreateForm';
import Content from './components/crud components/Content';
import EditPost from './components/crud components/EditPost';
import Delete from './components/crud components/Delete';
import Header from './components/nav components/Header';
import Nav from './components/nav components/Nav';
import SubjectSearchResults from './components/nav components/subsearch component/SubjectSearchResults';

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
				<SubjectSearch
				updateSheets={updateSheets}
				/>
			</nav>

			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/search/:searchOp/:inputEl' element={<SubjectSearchResults sheets={sheets}/>} />
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
					path='/search/:searchOp/:inputEl/content/:id'
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

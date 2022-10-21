import Header from './components/Header';
import './App.css';
import Content from './components/Content';
import Nav from './components/Nav';
import SubjectSearch from './components/SubjectSearch';
import Form from './components/Form';
import { Routes, Route, Link, NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import CreateForm from './components/CreateForm';
import Home from './components/Home';

function App() {
	// const [page, setPage] = useState('');
	const navigate = useNavigate();

	function getActivity() {
		const url = 'https://cheatsheetmern.herokuapp.com/  ';

		console.log('Hello from getactivity()')

		fetch(url)
			.then((response) => response.json())
			.then((response) => {
				console.log(response);
			})
			.catch(console.error);
	}

	return (
		
			<div className='App'>
        <Home getActivity={getActivity}/>
			</div>
	);
}

export default App;
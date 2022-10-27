import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import searchicon from '../../../assets/searchicon.png';

function SubjectSearch({updateSheets}) {
	const navigate = useNavigate();
	const [searchOp, setSearchOp] = useState('');
	const [inputEl, setInputEl] = useState('');

	function getBySearch(event) {
		setSearchOp(event.target.value);
	}
	function getInputStr(event) {
		setInputEl(event.target.value);
	}
	function fetchBySearchOp() {
		let url = `https://docuset-backend.herokuapp.com/cheatsheets/${searchOp.toLowerCase()}/${inputEl}`;

		fetch(url)
			.then((res) => res.json(res))
			.then((res) => {
				updateSheets(res);
			});
	}

	function handleSubmit(event) {
		event.preventDefault();
		fetchBySearchOp(searchOp);
		navigate('/search/' + searchOp + '/' + inputEl);
		setInputEl('');
	}
	return (
		<div id='parent-search-form'>
			<form id='search-form' onSubmit={handleSubmit}>
				<select id='search-select' onChange={getBySearch} required={true}>
					<option value=''>Search By</option>
					<option value='title'>Title</option>
					<option value='Subject'>Subject</option>
					<option value='Contains'>Contains</option>
				</select>
				<input
					type='text'
					name='search-field'
					id='search-field'
					onChange={getInputStr}
					value={inputEl}
					required={true}
				/>
				<button type='submit' value='submit'>
					<img
						id='search-icon'
						src='https://i.ibb.co/7vvd1Y5/Search-192x192.png'
					/>
				</button>
			</form>
		</div>
	);
}

export default SubjectSearch;

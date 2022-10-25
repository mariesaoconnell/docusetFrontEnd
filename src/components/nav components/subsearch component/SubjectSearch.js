import React from 'react';
import { useNavigate } from 'react-router-dom';

function SubjectSearch({
	getActivity,
	searchOp,
	setSearchOp,
	inputEl,
	setInputEl,
	sheets,
	updateSheets,
}) {
	const navigate = useNavigate();

	function getBySearch(event) {
		setSearchOp(event.target.value);
	}

	function getInputStr(event) {
		setInputEl(event.target.value);
	}

	function handleSubmit(event) {
		event.preventDefault();
		getActivity();
		navigate('/search/' + searchOp + '/' + inputEl);
		setInputEl('')
	}
	return (
		<main>
			<div>
				<form onSubmit={handleSubmit}>
					<select id='search-select' onChange={getBySearch}>
						<optgroup label='Search By'>
							<option value='Subject'>Subject</option>
							<option value='Contains'>Contains</option>
						</optgroup>
					</select>

					<input
						type='text'
						name='search-field'
						id='search-field'
						onChange={getInputStr}
						value={inputEl}
					/>
					<button type='submit'>Search</button>
				</form>
			</div>
		</main>
	);
}

export default SubjectSearch;

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
		// if(!searchOp) alert('Select a Search By Parameter!')
		getActivity();
		navigate('/search/' + searchOp + '/' + inputEl);
		setInputEl('')
	}
	return (
		<main>
			<div>
				<form id='search-form' onSubmit={handleSubmit}>
					<select id='search-select' onChange={getBySearch} required={true}>
							<option value='' >
								Search By
							</option>
							<option value='Subject' required={true}>
								Subject
							</option>
							<option value='Contains' required={true}>
								Contains
							</option>
						</select>

					<input
						type='text'
						name='search-field'
						id='search-field'
						onChange={getInputStr}
						value={inputEl}
						required={true}
					/>
					<button type='submit' value='submit'>Search</button>
				</form>
			</div>
		</main>
	);
}

export default SubjectSearch;

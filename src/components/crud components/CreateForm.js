import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Nav from '../nav components/Nav';

function CreateForm() {
	const navigate = useNavigate();

	const [content, setContent] = useState({
		title: '',
		subject: '',
		body: '',
	});

	function postContent() {
		// Simple POST request with a JSON body using fetch
		const requestOptions = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(content),
		};
		fetch('https://cheatsheetmern.herokuapp.com/cheatsheets', requestOptions)
			.then((response) => response.json())
			.then((response) => {
				let postID = response[response.length - 1]._id;
				content.id = postID;
				navigate('/content/' + content.id);
			})
			.catch((error) => {
				console.log(error);
			});
	}

	// HANDLE CHANGE
	function handleChange(event) {
		//SET STATES
		setContent({ ...content, [event.target.name]: event.target.value });
	}

	// HANDLE SUBMIT
	function handleSubmit(event) {
		event.preventDefault();
		postContent();

		setContent({ title: '', subject: '', body: '' });
	}

	return (
		<div id='create-form-container-div'>
			<h1 className='mySheetsTitle'>Create A Sheet</h1>
			<h2>🗒</h2>

			<form className='form' onSubmit={handleSubmit}>
				<label className='title-label'>Title</label>
				<input
					className='form-title'
					type='text'
					name='title'
					placeholder='Title'
					value={content.title}
					onChange={handleChange}
				/>
				<label className='subject-label'>Subject</label>
				<input
					className='form-subject'
					type='text'
					name='subject'
					placeholder='Subject'
					value={content.subject}
					onChange={handleChange}
				/>
				<label className='content-label'>Content</label>
				<textarea
					className='form-body'
					type='textarea'
					name='body'
					placeholder='Content'
					value={content.content}
					onChange={handleChange}
				/>
				<button>Submit</button>
			</form>
		</div>
	);
}

export default CreateForm;

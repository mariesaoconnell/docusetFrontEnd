import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Content from './Content';

function CreateForm({ setID }) {
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
				return setID(postID); // right now this is setting the ID which is on App.js so that on submit, we will be navigated to content/:id... if we implement state for the entire content object, this will no longer be necessary
			});
	}

	const navigate = useNavigate();

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
		<div>
			<h1>Hello From create form</h1>
			<form className='form' onSubmit={handleSubmit}>
				<input
					type='text'
					name='title'
					placeholder='Title'
					value={content.title}
					onChange={handleChange}
				/>
				<input
					type='text'
					name='subject'
					placeholder='Subject'
					value={content.subject}
					onChange={handleChange}
				/>
				<input
					type='text'
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

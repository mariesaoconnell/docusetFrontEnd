import React from 'react';

import {useNavigate} from 'react-router-dom'

function CreateForm({content, setContent}) {

	const navigate = useNavigate();

	// HANDLE CHANGE
	function handleChange(event) {

		//SET STATES
		setContent({ ...content, [event.target.name]: event.target.value });
	}

	// HANDLE SUBMIT
	function handleSubmit(event) {
		event.preventDefault();
		// navigate('/content');
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
					name='content'
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

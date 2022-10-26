import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Nav from '../nav components/Nav';

function EditPost({ currentEditPost }) {
	const { id } = useParams(); // grabs the ID from the URL
	const navigate = useNavigate();

	const [content, setContent] = useState({
		title: currentEditPost.title,
		subject: currentEditPost.subject,
		body: currentEditPost.body,
	});

	function updateContent() {
		// Simple POST request with a JSON body using fetch
		const requestOptions = {
			method: 'PUT',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(content),
		};
		let url = 'https://cheatsheetmern.herokuapp.com/cheatsheets/' + id;
		fetch(url, requestOptions)
			.then((response) => response.json())
			.then((response) => {
				navigate('/content/' + id);
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
		updateContent();
	}

	return (
		<div id="edit-post-container">
			<h1 className='editPostTitle'>Edit Post</h1>
			<div className='editPost'>
				<form className="form" onSubmit={handleSubmit}>
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
						type='text'
						name='body'
						placeholder='Content'
						value={content.body}
						onChange={handleChange}
					/>
					<button>Submit</button>
				</form>
			</div>
		</div>
	);
}

export default EditPost;

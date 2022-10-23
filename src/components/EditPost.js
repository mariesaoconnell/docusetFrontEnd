import {useState} from 'react';
import {useParams} from 'react-router-dom';


function EditPost({ currentEditPost, postState }) {
	const { id } = useParams(); // grabs the ID from the URL
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
				let postID = response[response.length - 1]._id;
				content.id = postID;
				postState(content);
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
		<div>
			<h1>Hello from Edit Post</h1>
			<form onSubmit={handleSubmit}>
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
					value={content.body}
					onChange={handleChange}
				/>
				<button>Submit</button>
			</form>
		</div>
	);
}

export default EditPost;

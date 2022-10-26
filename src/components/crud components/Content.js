import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Nav from '../nav components/Nav';

function Content({ setCurrentEditPost, setDeletePost }) {
	const { id } = useParams(); // grabs the ID from the URL
	const [post, setPost] = useState('');
	const navigate = useNavigate();

	useEffect(() => {
		fetchById();
	}, []);

	// GET LAST POST BY ID
	function fetchById() {
		let url = 'https://cheatsheetmern.herokuapp.com/cheatsheets/' + id;
		fetch(url)
			.then((response) => response.json())
			.then((response) => {
				setPost(response);
			});
	}

	function editBtnClick() {
		setCurrentEditPost(post);
		navigate('/edit/' + id);
	}

	function deleteBtnClick() {
		setDeletePost(post);
		navigate('/delete/' + id);
	}

	return (
		<div className='sheetCreated'>
			<h1>📚 Sheet Created 📚</h1>
			<h2>{post.title}</h2>
			<h3>{post.subject}</h3>
			<p>{post.body}</p>
			<button onClick={editBtnClick}>Edit</button>
			<button onClick={deleteBtnClick}>Delete</button>
		</div>
	);
}

export default Content;

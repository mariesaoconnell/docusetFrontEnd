import React from 'react';
import { useParams } from 'react-router-dom';

function Delete() {
	const { id } = useParams();
	// DELETE FETCH
	function deleteContent() {
		// Simple POST request with a JSON body using fetch
		const requestOptions = {
			method: 'DELETE',
		};
		let url = 'https://docuset-backend.herokuapp.com/cheatsheets' + id;
		fetch(url, requestOptions).then((response) => response.json());
	}

	return (
		<div id='delete-post-container'>
			<div onLoad={deleteContent()}>
				<h1>Your Post was Successfully Deleted!</h1>
			</div>
		</div>
	);
}

export default Delete;

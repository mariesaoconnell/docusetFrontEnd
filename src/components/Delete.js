import React from 'react';
import { useParams } from 'react-router-dom'


function Delete({deletePost}) {
  const{ id } = useParams();
  // DELETE FETCH
	function deleteContent() {
		// Simple POST request with a JSON body using fetch
		const requestOptions = {
			method: 'DELETE',
		};
		let url = 'https://cheatsheetmern.herokuapp.com/cheatsheets/' + id;
		fetch(url, requestOptions)
			.then((response) => response.json())
	}

  return (
    <div onLoad={deleteContent()}>
      <h1>Your Post was Successfully Deleted!</h1>
    </div>
  );
}

export default Delete;

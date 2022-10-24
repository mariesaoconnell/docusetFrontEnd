import React from 'react';

function SubjectSearch({ getActivity }) {
	function testClick() {
		getActivity();
	}

	return (
		<main>
			<div>
				<input type='text' />
				<button onClick={testClick}>Search</button>
			</div>
		</main>
	);
}

export default SubjectSearch;

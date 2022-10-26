import React from 'react';
import ResultCard from './ResultCard';

function SubjectSearchResults({ sheets }) {
	return (
		<div id='search-result-main-div'>
			<h1>Search Results</h1>

			{sheets.map((sheet) => {
				return <ResultCard sheet={sheet} key={sheet._id} />;
			})}
		</div>
	);
}

export default SubjectSearchResults;

import React from 'react';
import { Link } from 'react-router-dom';

function ResultCard({sheet}) {
  return (
		<div id='result-card-container'>
			<Link to={`content/${sheet._id}`}>
				<p>
					<span>Subject:</span>
					<span className='emphasize'>{sheet.subject}</span>
					
					<span>Title:</span>
					<span className='emphasize'>{sheet.title}</span>
				</p>
			</Link>
		</div>
	);
}

export default ResultCard;

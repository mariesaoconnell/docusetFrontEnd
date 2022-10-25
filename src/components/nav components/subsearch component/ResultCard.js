import React from 'react';
import { Link } from 'react-router-dom';

function ResultCard({sheet}) {
  return (
		<div>
			<Link to={`content/${sheet._id}`}>
				{sheet.subject} / {sheet.title}
			</Link>
		</div>
	);
}

export default ResultCard;

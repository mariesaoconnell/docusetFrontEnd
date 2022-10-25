import React from 'react';
import {Link} from 'react-router-dom';

function MySheet({sheet}) {
  return (
		<div className='mySheetsDisplay'>
			<Link to={`/content/${sheet._id}`}>
				<h3>{sheet.subject} </h3>
				<p>{sheet.title}</p>
			</Link>
		</div>
	);
}

export default MySheet;

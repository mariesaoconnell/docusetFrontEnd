import React from 'react';
import {Link} from 'react-router-dom';

function MySheet({sheet}) {
  return (
		<div>
			<Link to={`/content/${sheet._id}`}>{sheet.subject} / {sheet.title}</Link>
		</div>
	);
}

export default MySheet;

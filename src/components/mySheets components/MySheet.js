import React from "react";
import { Link } from "react-router-dom";

function MySheet({ sheet }) {
  return (
		<div id='child-sheet-div'>
			<div id="shadow"></div>
			<Link to={`/content/${sheet._id}`}>
				<p id='mysheet-subject' className='my-sheet-container'>
					<span>Subject:</span> <span className="emphasis">{sheet.subject}</span>
					<br />
					<span>Title:</span> <span className='emphasis'>{sheet.title}</span>
				</p>
			</Link>
		</div>
	);
}

export default MySheet;

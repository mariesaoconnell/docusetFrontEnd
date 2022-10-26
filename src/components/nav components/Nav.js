import React from 'react';
import { Link } from 'react-router-dom';

function Nav(props) {
	return (
		<div className='navDiv'>
			<Link to="/">Home</Link>
			<Link to='/MySheets'>
				My Sheets
			</Link>
			<Link to='/create'>
				Create Sheet
			</Link>
		</div>
	);
}

export default Nav;

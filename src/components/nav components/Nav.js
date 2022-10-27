import React from 'react';
import { Link } from 'react-router-dom';

function Nav(props) {
	return (
		<div className='navDiv'>
			<Link to='/'>
				<img
					className='nav-icon'
					alt='home-icon'
					src='https://i.ibb.co/yn9dW38/Home-192x192.png'
				/>
			</Link>
			<Link to='/MySheets'>
				<img
					className='nav-icon'
					src='https://i.ibb.co/r4Xh6bc/Briefcase-192x192.png'
				/>
			</Link>
			<Link to='/create'>
				<img src='https://i.ibb.co/rZ1bTsp/File-Add-192x192.png' className="nav-icon" alt="create-new-sheet"/>
			</Link>
		</div>
	);
}

export default Nav;

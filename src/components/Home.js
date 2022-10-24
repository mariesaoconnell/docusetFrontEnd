import { useState } from 'react';
import { Routes, Route, Link, NavLink } from 'react-router-dom';

import Header from './Header';
import Nav from './Nav';
import SubjectSearch from './SubjectSearch';

function Home({ getActivity }) {
	return (
		<nav>
			<Header />
			<Nav />
			<SubjectSearch getActivity={getActivity} />
			<h4>Welcome to DocuSet</h4>
			<p>description</p>
			<div className='homeImage'><img src="https://cdn.pixabay.com/photo/2020/04/30/10/15/cute-notes-5112237_1280.png" alt="" /></div>
		</nav>
	);
}

export default Home;

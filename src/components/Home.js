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
			<SubjectSearch />
		</nav>
	);
}

export default Home;

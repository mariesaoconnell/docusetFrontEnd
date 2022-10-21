import React from 'react';
import Header from './Header';
import SubjectSearch from './SubjectSearch';
import Nav from './Nav';

function Home({getActivity}) {
	return <div>


		<Header/>
		<Nav />
		<SubjectSearch getActivity={getActivity}/>
		


	</div>;
}

export default Home;
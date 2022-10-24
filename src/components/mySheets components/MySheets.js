import React from 'react';
import { useEffect } from 'react';
import MySheet from './MySheet';

function MySheets({ sheets, getActivity }) {
	useEffect(() => {
		getActivity();
	});

	return (
		<>
			<h1 className='mySheetsTitle'>My Sheets</h1>
			<h2 className='mySheetsTitle'>Title/Subject</h2>
			<div className='mySheetsDisplay'>
				{sheets.map((sheet) => {
					return <MySheet sheet={sheet} key={sheet._id} />;
				})}
			</div>
		</>
	);
}

export default MySheets;

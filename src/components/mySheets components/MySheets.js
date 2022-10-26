import React from 'react';
import { useEffect } from 'react';
import MySheet from './MySheet';

function MySheets({ sheets, getActivity }) {
	useEffect(() => {
		getActivity();
	});

	return (
		<div id='mysheet-container'>
			<h1 className='mySheetsTitle'>My Sheets</h1>
			<h2 className='mySheetsTitle'>Sorted by Subject and Title</h2>
			<div id="parent-sheet-display" className='mySheetsDisplay'>
				{sheets.map((sheet) => {
					return <MySheet sheet={sheet} key={sheet._id} />;
				})}
			</div>
		</div>
	);
}

export default MySheets;

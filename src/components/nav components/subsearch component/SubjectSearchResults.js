import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ResultCard from './ResultCard';
import MySheet from '../../mySheets components/MySheet';

function SubjectSearchResults({sheets}) {
  // use params to filter
  const {searchOp, inputEl} = useParams();

  // then .map to render
  const [filtered, setFiltered] = useState([]);

  useEffect(()=>{
    filteredSheets();
  }, [sheets])

  function filteredSheets(){
   const variable = sheets.filter((sheet)=>{

    if(searchOp == 'Contains'){

        return (sheet.body.includes(inputEl));
      }
      else if(searchOp == 'Subject'){
        return ((sheet.subject).includes(inputEl.toLowerCase() || inputEl.toUpperCase()));
      }
    })
    setFiltered(variable);
  }

  return (
		<div id='search-result-main-div'>
			<h1>Search Results</h1>

			{filtered.map((sheet) => {
				return <ResultCard sheet={sheet} key={sheet._id} />;
			})}
		</div>
	);
}

export default SubjectSearchResults;

import React from 'react';

function SubjectSearch({getActivity}){

  function testClick(){
    getActivity()
    console.log('Search Button Works')
  }

    return (
        
        <main>
        
        <div>
        <input type="text" />
        <button onClick={testClick}>Search</button>
      </div>

      {/* Render Component that Holds Search Results on Search Click */}

      
        
        </main>
    );
}

export default SubjectSearch;
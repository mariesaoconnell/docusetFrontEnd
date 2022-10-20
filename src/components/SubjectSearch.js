import React from 'react';

function SubjectSearch({ handleClick }) {
    return (
        
        <main>
        
        <div>
        <input type="text" />
        <button onClick={handleClick}>Search</button>
      </div>
      <div className="searchResults">
        <ul>
            <li>Result</li>
            <li>Result</li>
            <li>result</li>
        </ul>

      </div>
        
        </main>
    );
}

export default SubjectSearch;
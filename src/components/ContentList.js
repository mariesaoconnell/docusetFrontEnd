import React, { useEffect } from 'react';
import ContentCard from './ContentCard';

function ContentList({renderContent}) {

    console.log(renderContent)
    return (
        <div id="content-container">
            {renderContent.map((ele)=>{
                return <ContentCard ele={ele}/>
            })
            }
        </div>
    );
}

export default ContentList;

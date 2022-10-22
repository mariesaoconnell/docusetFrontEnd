import React from 'react';

function ContentCard({ele}) {
  return (
    <div id="content-card-container">
      <p>{ele.title}</p>
      <p>{ele.subject}</p>
    </div>
  );
}

export default ContentCard;

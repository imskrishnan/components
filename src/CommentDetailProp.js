// Import the required React Libraries
import React from 'react';

const contentStyle = {
  padding: '20px',
};

// Create the required Component
const CommentDetailProp = (props) => {
  console.log(props);
  return (
    // author, date and text
    <div className="content" style={{ margin: '0.75rem', padding: '0.2rem' }}>
      <div className="avatar" style={{ marginRight: '10px' }}>
        <a href="/#" className="avatar">
          <img src={props.myImg} alt="avatar" />
        </a>
      </div>
      <a href="/#" className="author">
        {props.authorName}
      </a>
      <div className="metadata" style={{ marginLeft: '0px' }}>
        {props.theDate}
      </div>
      <div className="text" style={{ contentStyle }}>
        {props.text}
      </div>
    </div>
  );
};

// Export the componenet to be made available for different files
export default CommentDetailProp;

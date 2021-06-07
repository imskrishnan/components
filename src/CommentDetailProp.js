// Import the required React Libraries
import React from 'react';

// Styling
const contentStyling = {
  margin: '0.75rem',
  padding: '1rem',
};

// Create the required Component
const CommentDetailProp = (props) => {
  console.log(props);
  return (
    // author, date and text
    <div className="content" style={contentStyling}>
      <div className="avatar" style={{ marginRight: '10px' }}>
        <a href="/#" className="avatar">
          <img src={props.myImg} alt="avatar" />
        </a>
      </div>
      <a href="/#" className="author" style={{ marginRight: '20px' }}>
        {props.author}
      </a>
      <div className="metadata" style={{ marginLeft: '0px' }}>
        {props.theDate} at {new Date().toLocaleTimeString('en-US')}
      </div>
      <div className="text">{props.text}</div>
    </div>
  );
};

// Export the componenet to be made available for different files
export default CommentDetailProp;

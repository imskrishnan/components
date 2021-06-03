import React from 'react';

const LikesProp = (props) => {
  return (
    <div className="ui labeled button" tabIndex="0">
      <div className="ui button">
        <i className="heart icon"></i> Like
      </div>
      <a href="/#" className="ui basic label">
        {props.likeCount}
      </a>
    </div>
  );
};

export default LikesProp;

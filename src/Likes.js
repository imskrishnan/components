import React from 'react';
import faker from 'faker';

const Likes = () => {
  return (
    <div className="ui labeled button" tabIndex="0">
      <div className="ui button">
        <i className="heart icon"></i> Like
      </div>
      <a href="/#" className="ui basic label">
        {faker.datatype.number(1000)}
      </a>
    </div>
  );
};

export default Likes;

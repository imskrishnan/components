import React from 'react';
import faker from 'faker';

const CommentDetail = () => {
  return (
    <div className="content">
      <a href="/" className="author">
        {faker.name.firstName()}
      </a>
      <div className="metadata">
        <span className="date">{faker.date.past().toLocaleString()}</span>
      </div>
      <div className="text">{faker.lorem.words(3)}</div>
    </div>
  );
};

export default CommentDetail;

import React from 'react';

const AvatarProp = (props) => {
  return (
    <div className="avatar">
      <a href="/#" className="avatar">
        <img src={props.myImg} alt="avatar" />
      </a>
    </div>
  );
};

export default AvatarProp;

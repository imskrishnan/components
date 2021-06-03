import React from 'react';
import faker from 'faker';

const Avatar = () => {
  return (
    <a href="/#" className="avatar">
      <img alt="avatar.png" src={faker.image.avatar()} />
    </a>
  );
};

export default Avatar;

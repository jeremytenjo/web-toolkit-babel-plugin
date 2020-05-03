module.exports = `
import React from 'react';
import Icon from '@tenjojeremy/web-toolkit/dataDisplay/icon';

const Button = () => {
  return (
    <div>
      <Icon name='google/1' styles={{ color: 'red' }} />
      <Icon name='google/2' styles={{ color: 'red' }} />
    </div>
  );
};

export default Button;
`;

exports.module = `
import React from 'react';
import Google1Icon from '@tenjojeremy/web-toolkit/dataDisplay/icons/google/1';
import Google2Icon from '@tenjojeremy/web-toolkit/dataDisplay/icons/google/2';

const Button = () => {
  return (
    <div>
      <Google1Icon styles={{ color: 'red' }} />
      <Google2Icon styles={{ color: 'red' }} />
    </div>
  );
};

export default Button;
`;

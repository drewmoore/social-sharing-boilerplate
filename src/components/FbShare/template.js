import React from 'react';

const template = ({ share, visible }) => (
  <button onClick={() => share(visible)}>
    Share
  </button>
);

export default template;

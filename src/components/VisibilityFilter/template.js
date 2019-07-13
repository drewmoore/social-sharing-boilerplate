import React from 'react';

const template = ({ toggleVisibility }) => (
  <button onClick={() => (toggleVisibility())}>Click Me</button>
);

export default template;

import React from 'react';

import './style.css';

const template = ({ visible }) => (
  <h1 className={`toggleable-header ${visible ? 'visible' : ''}`}>What's Up</h1>
);

export default template;

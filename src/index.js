import React from 'react';
import ReactDOM from 'react-dom';

const renderApp = () => {
  const element = document.getElementById('root');

  ReactDOM.render(<h1>Yo!</h1>, element);
}

renderApp();

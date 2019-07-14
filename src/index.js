import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'

import { initialize } from './config';
import store from './store'
import App from './components/App'

const rootElement = document.getElementById('root')

window.renderApp = (config, state) => {
  initialize(JSON.parse(config));

  ReactDOM.render(
    <Provider store={store(JSON.parse(state))}>
      <App />
    </Provider>,
    rootElement
  );
};

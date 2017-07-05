import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import registerServiceWorker from './registerServiceWorker';
import App from './App';

const locale = (state = 'en', action) => {
  switch (action.type) {
    case 'SET_LOCALE':
      return action.locale;
    default:
      return state;
  }
};

const store = createStore(locale);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

registerServiceWorker();

import React from 'react';
import ReactDOM from 'react-dom/client';  // Import from 'react-dom/client' for React 18
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { thunk } from 'redux-thunk';

import { reducers } from './reducers';
import App from './App';
import './index.css';

const store = createStore(reducers, compose(applyMiddleware(thunk)));

// Create root using createRoot from react-dom/client
const root = ReactDOM.createRoot(document.getElementById('root'));

// Use root.render() to render the app
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

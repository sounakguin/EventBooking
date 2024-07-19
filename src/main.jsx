import React from 'react';
import { createRoot } from 'react-dom'; // Import createRoot from react-dom
import { Provider } from 'react-redux';
import store from './Features/Events/store';
import App from './App';

// Use createRoot instead of ReactDOM.render
createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
);

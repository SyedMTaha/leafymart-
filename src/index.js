import React from 'react';
import ReactDOM from 'react-dom/client'; // ✅ Use "client" module
import { Provider } from 'react-redux';
import store from './components/store';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root')); // ✅ Use createRoot
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/js/dist/modal";
import './index.css';
import { Provider } from 'react-redux';
import store from './Reduxmanager/Store';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <Provider store={store}>
    <App/>
    </Provider>
  </React.StrictMode>
);



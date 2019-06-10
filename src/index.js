import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';


// import "./css/bootstrap.min.css";
// import "./css/bootstrap.css";
// import "./css/fonts/pe-icon-7-stroke.css";
// import "./css/fonts/pe-icon-7-stroke.css";

import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux';
import Store from './Store/Store';

console.log(Store.getState());

ReactDOM.render(
<Provider store = {Store}>
    <App />
</Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

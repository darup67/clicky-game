import React from "react";
import ReactDOM from "ReactDOM";
import app from "./app";
import "./index.css";
import registerServiceWorker from './registerServiceWorker';
ReactDOM.render( <app/> , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
registerServiceWorker.register();
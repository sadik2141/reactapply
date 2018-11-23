import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
// import InputComponent from "./Components/InputComponent";
// import ToastComponent from "./Components/ToastComponent";
// import UiComponent from "./Components/UiComponent";
// import FontAwesomeComponent from "./Components/FontAwesomeComponent";
// import DropDownComponent from "./Components/DropDownComponent";
// import AutoCompleteComponent from "./Components/AutoCompleteComponent";
import GoogleAutoComplete from "./Components/GoogleAutoCompleteComponent";
ReactDOM.render(<GoogleAutoComplete />, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import './assets/styles/application.css'
import App from './app/App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// ReactDOM.render(React.createElement('h1', null, "Hello World"),
//     document.getElementById('root'));

    // ReactDOM.render(<h1>Hellow world :)</h1>,
    // document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

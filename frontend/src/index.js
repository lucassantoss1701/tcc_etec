import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './main/App';
import * as serviceWorker from './serviceWorker';
import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyD-a_t_1igEo7wurZHchQMwCf9bZgoh-bY",
    authDomain: "tcc-etec.firebaseapp.com",
    databaseURL: "https://tcc-etec.firebaseio.com",
    projectId: "tcc-etec",
    storageBucket: "tcc-etec.appspot.com",
    messagingSenderId: "969832618114",
    appId: "1:969832618114:web:a060f6ce13d403e2"
};

firebase.initializeApp(config);
const storage = firebase.storage();

export {
    storage, firebase as default
}


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

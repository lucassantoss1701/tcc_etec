import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyD-a_t_1igEo7wurZHchQMwCf9bZgoh-bY",
    authDomain: "tcc-etec.firebaseapp.com",
    databaseURL: "https://tcc-etec.firebaseio.com",
    projectId: "tcc-etec",
    storageBucket: "tcc-etec.appspot.com",
    messagingSenderId: "969832618114",
    appId: "1:969832618114:web:a060f6ce13d403e2"
};


export const firebaseImpl = firebase.initializeApp(config);
export const firebaseDatabase = firebase.database();

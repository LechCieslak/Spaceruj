import React from 'react';
import ReactDOM from 'react-dom';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';
import App from './components/App';
import firebase from 'firebase';

// Initialize Firebase
const config = {
    apiKey: "AIzaSyDP3cSEKYEs84kblggncx1P70EHHUSPRtE",
    authDomain: "myapp-57f03.firebaseapp.com",
    databaseURL: "https://myapp-57f03.firebaseio.com",
    projectId: "myapp-57f03",
    storageBucket: "myapp-57f03.appspot.com",
    messagingSenderId: "32034306360"
};
firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));
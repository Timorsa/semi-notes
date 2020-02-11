import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import firebaseConfig from './config';

const firebase = require('firebase');
require('firebase/firestore');

firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById('root'));


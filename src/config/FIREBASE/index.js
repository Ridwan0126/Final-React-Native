import firebase from 'firebase';

firebase.initializeApp({
  apiKey: 'AIzaSyCAaXKg8aJH6xJ2hNmmtoVVsLsQrORgPZs',
  authDomain: 'finalnative.firebaseapp.com',
  databaseURL: 'https://finalnative-default-rtdb.firebaseio.com',
  projectId: 'finalnative',
  storageBucket: 'finalnative.appspot.com',
  messagingSenderId: '586531845522',
  appId: '1:586531845522:web:7759445552bfb28227bd4b',

  // apiKey: 'AIzaSyB0087xbUJgAxLRDlu_VIPObvcnAr0yBfU',
  // authDomain: 'clonewa-ff96b.firebaseapp.com',
  // databaseURL: 'https://clonewa-ff96b-default-rtdb.firebaseio.com',
  // projectId: 'clonewa-ff96b',
  // storageBucket: 'clonewa-ff96b.appspot.com',
  // messagingSenderId: '909283010164',
  // appId: '1:909283010164:web:dd5a130ab376a584299321',
});

const FIREBASE = firebase;

export default FIREBASE;

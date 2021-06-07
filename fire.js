import firebase from 'firebase/app';
import 'firebase/firestore';
require('firebase/auth');

var firebaseConfig = {
    apiKey: "AIzaSyCrFi4xN65y0ApaSUJ_rARb6bgNsRVxQSs",
    authDomain: "login-app-p.firebaseapp.com",
    projectId: "login-app-p",
    storageBucket: "login-app-p.appspot.com",
    messagingSenderId: "524273541767",
    appId: "1:524273541767:web:ffaf7230e8b0dd0828ce22",
    measurementId: "G-6SG48MD8K3"
  };
  
  const fire = firebase.initializeApp(firebaseConfig);
  const db= firebase.firestore();
  

  export default fire;
  export {db}
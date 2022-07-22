import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyBm56i-P49bUzodFZjHXgH0mWY9L_1OJ_A",
    authDomain: "ride-709e2.firebaseapp.com",
    projectId: "ride-709e2",
    storageBucket: "ride-709e2.appspot.com",
    messagingSenderId: "562640778118",
    appId: "1:562640778118:web:83afa7e004fb8070c17207"
  };
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();

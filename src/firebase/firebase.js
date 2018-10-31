import * as firebase from 'firebase';

  // Initialize Firebase
  const config = {
    apiKey: "AIzaSyCCPvYiSStVcupWhg75RBw-ah-d2fKErlE",
    authDomain: "gastos-3cb46.firebaseapp.com",
    databaseURL: "https://gastos-3cb46.firebaseio.com",
    projectId: "gastos-3cb46",
    storageBucket: "gastos-3cb46.appspot.com",
    messagingSenderId: "786552947220"
  };
  
// connection
firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default};

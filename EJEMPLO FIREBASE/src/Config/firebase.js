import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = { 
    apiKey: "AIzaSyDT-C-z1GBCULPPbOSxKPmGXN0Ns2paxdg",
    authDomain: "dr20223-50994.firebaseapp.com",
    projectId: "dr20223-50994",
    storageBucket: "dr20223-50994.appspot.com",
    messagingSenderId: "839127550319",
    appId: "1:839127550319:web:f844499e0aadea7b38809a"
  };

  firebase.initializeApp(firebaseConfig)
  // firebase.auth = firebase.auth()

  export default firebase

import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyAKHaWHFYVwyyr-Z6dCRSoFIihL5tVqn0o",
  authDomain: "my-app-f1db9.firebaseapp.com",
  projectId: "my-app-f1db9",
  storageBucket: "my-app-f1db9.appspot.com",
  messagingSenderId: "898148507871",
  appId: "1:898148507871:web:af82acc2c47e5f2e6fc96a"
};

// Initialize Firebase
 firebase.initializeApp(firebaseConfig);

 export default firebase
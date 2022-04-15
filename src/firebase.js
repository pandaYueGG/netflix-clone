import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCzt0s7gW_oTAeSmA_vMqy0EKvH2JWCpB4",
    authDomain: "netflix-clone-475dd.firebaseapp.com",
    projectId: "netflix-clone-475dd",
    storageBucket: "netflix-clone-475dd.appspot.com",
    messagingSenderId: "187453221620",
    appId: "1:187453221620:web:94cf4983a58e9d91940ca1"
  };
  
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth()

  export { auth };
  export default db;
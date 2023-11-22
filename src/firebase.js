// import firebase from 'firebase';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import'firebase/compat/storage'
const firebaseConfig = {
  apiKey: "AIzaSyAuJCebXV_vOL0X1TJAsMy7wIZ3AztJ8eE",
  authDomain: "snapchat-clone-f028f.firebaseapp.com",
  projectId: "snapchat-clone-f028f",
  storageBucket: "snapchat-clone-f028f.appspot.com",
  messagingSenderId: "557333276013",
  appId: "1:557333276013:web:5ecc61faf15115e693a664"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
 const storage = firebaseApp.storage();
const provider = new firebase.auth.GoogleAuthProvider();
export default storage
export{db, auth, storage, provider}
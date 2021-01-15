import firebase from "firebase";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDSSgplTrOg-gAPY8UFRaXaf7jAWHgARI8",
  authDomain: "clone-b29a2.firebaseapp.com",
  projectId: "clone-b29a2",
  storageBucket: "clone-b29a2.appspot.com",
  messagingSenderId: "758143381940",
  appId: "1:758143381940:web:27b675390280ecb2e842e1",
  measurementId: "G-7KX4G8V3FV"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };

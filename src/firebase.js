import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyACfWw-ED-vWjBdFw91EhMJXGRpDUiQVlM",
  authDomain: "footballinn.firebaseapp.com",
  projectId: "footballinn",
  storageBucket: "footballinn.appspot.com",
  messagingSenderId: "140085886636",
  appId: "1:140085886636:web:4f837b0eca6d2e9fdc6909",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;

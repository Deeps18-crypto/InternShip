import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBzSZe_fHD9McT1YloxGsQe6k7rSZEupcc",
  authDomain: "nursd-42b0a.firebaseapp.com",
  databaseURL: "https://nursd-42b0a-default-rtdb.firebaseio.com",
  projectId: "nursd-42b0a",
  storageBucket: "nursd-42b0a.appspot.com",
  messagingSenderId: "684096054482",
  appId: "1:684096054482:web:aa5e87f1349ef88e09f90b",
  measurementId: "G-L6CTG3WN4D"
});
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };

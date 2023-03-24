import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC6lous5pebo0S12ZRY8ZiPP1EPIMLxJdw",
  authDomain: "reespt4-aef6c.firebaseapp.com",
  projectId: "reespt4-aef6c",
  storageBucket: "reespt4-aef6c.appspot.com",
  messagingSenderId: "750511789447",
  appId: "1:750511789447:web:fdb5290f7c7f831763af22",
  measurementId: "G-TH3P6Y8H93"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const db = firebase.firestore();

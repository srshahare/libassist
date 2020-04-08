import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCLX5wHNUmAjJ2pYlyMyEJ_g8b9T7FwZz4",
    authDomain: "libassistant-81ffa.firebaseapp.com",
    databaseURL: "https://libassistant-81ffa.firebaseio.com",
    projectId: "libassistant-81ffa",
    storageBucket: "libassistant-81ffa.appspot.com",
    messagingSenderId: "869563997799",
    appId: "1:869563997799:web:d76512a89d09f0e26c3ec2",
    measurementId: "G-YVH6KY1E94"
  };

export const myFirebase = firebase.initializeApp(firebaseConfig);
const baseDb = myFirebase.firestore();
export const db = baseDb;
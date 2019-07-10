import firebase from "firebase";
// Add the Performance Monitoring library
import "firebase/performance";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCqASkpIcuegKKvjHtdn5rl4jmZmRzBfwk",
    authDomain: "padachone-1558105992334.firebaseapp.com",
    databaseURL: "https://padachone-1558105992334.firebaseio.com",
    projectId: "padachone-1558105992334",
    storageBucket: "padachone-1558105992334.appspot.com",
    messagingSenderId: "945352824364",
    appId: "1:945352824364:web:b7e7c138a27be13f"
});

const db = firebaseApp.firestore();

// Initialize Performance Monitoring and get a reference to the service
const perf = firebase.performance();

export { db, perf };
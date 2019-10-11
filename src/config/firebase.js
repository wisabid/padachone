import firebase from "firebase/app";
import "firebase/firestore";
// Add the Performance Monitoring library
import "firebase/performance";
import "firebase/messaging";

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

// FCM
let messaging = null;
if (firebase.messaging.isSupported()) {
  messaging = firebaseApp.messaging();
  messaging.usePublicVapidKey(
    // Project Settings => Cloud Messaging => Web Push certificates
    "BG0o7QfKpWsReXHLZ44_6qfhG1OL9bNsaggM0QPhmKu-VaMZaKNzxLejo3RLEnnUt3fJxHKcZLY5pj792lbnR34"
  );
} else {
  console.log(
    "%c Firebase Push API is not supported !",
    "color:red;font-size:50px;"
  );
}
export { db, perf, messaging };

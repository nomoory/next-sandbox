// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDcbGtv3cAa-SPoGH8qy_ut7jRrvwgL2mw",
  authDomain: "edmicbio.firebaseapp.com",
  databaseURL: "https://edmicbio.firebaseio.com",
  projectId: "edmicbio",
  storageBucket: "edmicbio.appspot.com",
  messagingSenderId: "1080865309187",
  appId: "1:1080865309187:web:0d14e5eba75b1ab0c8c436",
  measurementId: "G-W81HFFH8LS"
};

export const TARGET_COLLECTION = 'production';

try {
    firebase.initializeApp(firebaseConfig);
} catch (err) {
    // we skip the "already exists" message which is
    // not an actual error when we're hot-reloading
    if (!/already exists/.test(err.message)) {
        console.error('Firebase initialization error', err.stack);
    }
}

const db = firebase.firestore();

export default db;
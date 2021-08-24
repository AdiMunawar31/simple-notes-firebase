import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBhENa9R78DCeUQXbNEQWr_2KqoH5UA9Bw",
    authDomain: "simple-notes-firebase-8a07c.firebaseapp.com",
    databaseURL: "https://simple-notes-firebase-8a07c-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "simple-notes-firebase-8a07c",
    storageBucket: "simple-notes-firebase-8a07c.appspot.com",
    messagingSenderId: "475147783494",
    appId: "1:475147783494:web:5f50c4db69248b8e1aa947"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export var database = firebase.database();

export default firebase;
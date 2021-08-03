import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyBDUWVoVrjIazXndcQ2kIabBzwP0pVy1TU",
    authDomain: "react-contact-realtime.firebaseapp.com",
    databaseURL: "https://react-contact-realtime-default-rtdb.firebaseio.com",
    projectId: "react-contact-realtime",
    storageBucket: "react-contact-realtime.appspot.com",
    messagingSenderId: "678844425486",
    appId: "1:678844425486:web:8286db3b8f201493aca35f"
};


var db = firebase.initializeApp(firebaseConfig);

export default db.database().ref();
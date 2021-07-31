import firebase from "firebase";
var firebaseConfig = {
    apiKey: "AIzaSyBbjSSIAESmX_OqzWRyQHumcL3Hk6VqA3Q",
    authDomain: "login-and-registration-f66bb.firebaseapp.com",
    projectId: "login-and-registration-f66bb",
    storageBucket: "login-and-registration-f66bb.appspot.com",
    messagingSenderId: "700736792749",
    appId: "1:700736792749:web:af19630aa53f9d981ebe24"
};
const fire = firebase.initializeApp(firebaseConfig);

export default fire;
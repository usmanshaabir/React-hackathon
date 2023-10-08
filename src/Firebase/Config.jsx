// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBvLne_CJ1EkF2bcuXccTmRDehcJaC7zaM",
    authDomain: "hackathon-122.firebaseapp.com",
    projectId: "hackathon-122",
    storageBucket: "hackathon-122.appspot.com",
    messagingSenderId: "674091145170",
    appId: "1:674091145170:web:292c7c6aa5f331dca75a0b",
    measurementId: "G-5NGH2029GF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app)
const firestore = getFirestore(app);

export { analytics, auth, firestore }

import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword,createUserWithEmailAndPassword, } from "firebase/auth";
import{db,setDoc, doc}from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyC8SJbutbPhjm9QFGbmabtNRXAtlOgenxM",
    authDomain: "quiz-application-aece5.firebaseapp.com",
    projectId: "quiz-application-aece5",
    storageBucket: "quiz-application-aece5.appspot.com",
    messagingSenderId: "844250598428",
    appId: "1:844250598428:web:70397ec4789d98e5ca23d9",
    measurementId: "G-DQ6TLTDD3T"
};

const app = initializeApp(firebaseConfig);

// const db = getFirestore();
const auth = getAuth();

export{ 
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    db,
    doc,
    setDoc,
}
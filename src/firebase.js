// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC-9LbRud7HMbO8pK-8CQsQCykMzna0Epw",
    authDomain: "tobiasvibechat.firebaseapp.com",
    projectId: "tobiasvibechat",
    storageBucket: "tobiasvibechat.appspot.com",
    messagingSenderId: "1039083723175",
    appId: "1:1039083723175:web:4b342f57dc6a1449f9be82",
    measurementId: "G-ENGXZQYKBF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
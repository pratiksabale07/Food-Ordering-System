// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAmP5BJ2Mq3EMydnmpvIV0TPSL-ob2BxwI",
    authDomain: "food-ordering-system-loginpass.firebaseapp.com",
    projectId: "food-ordering-system-loginpass",
    storageBucket: "food-ordering-system-loginpass.appspot.com",
    messagingSenderId: "209819913344",
    appId: "1:209819913344:web:92c7d5685686446b8f6a65"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

console.log("Running Firebase...")
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD-ApfaOxF2CV1kYMOsVn1saFZlwDcxEWw",
  authDomain: "fir-test-52ee8.firebaseapp.com",
  databaseURL: "https://fir-test-52ee8.firebaseio.com",
  projectId: "fir-test-52ee8",
  storageBucket: "fir-test-52ee8.appspot.com",
  messagingSenderId: "896243534386",
  appId: "1:896243534386:web:0619deeb0633b29fc00a2b",
  measurementId: "G-L83FXTFGWR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);